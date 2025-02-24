"use client";

import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
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
    fileInputRef.current?.click(); // Manually trigger file input click
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
    <div className="flex items-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept=".csv"
      />
      <Button color="default" variant="flat" startContent={<Upload size={20} />} onClick={handleButtonClick}>
        {selectedFile ? selectedFile.name : "Choose File"}
      </Button>
      <Button color="primary" onClick={handleSubmission} disabled={!selectedFile}>
        Submit Solution
      </Button>
    </div>
  );
}
