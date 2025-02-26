"use client";

import { useRef, useState } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".csv")) {
      setSelectedFile(file);
      onFileSelect(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmission = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File submitted successfully!");
        setSelectedFile(null);
      } else {
        alert("Error submitting file. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting file:", error);
      alert("Error submitting file. Please try again.");
    }
  };

  return (
    <Card className="max-w-md w-full sm:w-auto dark:bg-slate-900/70 mx-4 my-2">
      <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-center p-4">
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept=".csv"
        />

        {/* Choose File Button */}
        <Button
          variant="flat"
          startContent={<Upload size={20} />}
          onClick={handleButtonClick}
          className="bg-transparent text-black dark:text-white hover:bg-transparent transition-colors"
        >
          {selectedFile ? selectedFile.name : "Choose File"}
        </Button>

        {/* Submit Button */}
        <Button
          color="primary"
          onClick={handleSubmission}
          disabled={!selectedFile}
          className="bg-gray-200 hover:bg-black hover:text-white text-indigo-600 dark:text-indigo-400 transition-colors rounded-full"
        >
          Submit Solution
        </Button>

        {/* Selected File Info (optional) */}
        {selectedFile && (
          <p className="text-sm text-gray-600 dark:text-gray-300 sm:ml-2 sm:mt-0 mt-1">
            Selected: <span className="font-medium">{selectedFile.name}</span>
          </p>
        )}
      </CardBody>
    </Card>
  );
}
