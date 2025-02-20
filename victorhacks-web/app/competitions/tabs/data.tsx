import { Card, CardBody, Button } from "@nextui-org/react";
import { Download } from "lucide-react";

export default function DataTab() {
  const handleDownload = (filename: string) => {
    // Create the download URL for files in the public directory
    const fileUrl = `/data/${filename}`;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardBody>
        <h2 className="text-xl font-semibold">Dataset Description</h2>
        <p>The competition data comprises 110 mathematics problems similar to those of the AIME.</p>
        <p>The answer to each problem is a non-negative integer between 0 and 999.</p>
        
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Download Resources</h3>
          
          <div className="flex flex-col gap-3">
            {/* Training Dataset */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Training Dataset</h4>
                <p className="text-sm text-gray-600">Contains 50 practice problems with solutions</p>
              </div>
              <Button 
                color="primary"
                endContent={<Download size={20} />}
                onClick={() => handleDownload("training_data.csv")}
              >
                Download CSV
              </Button>
            </div>

            {/* Test Dataset */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Test Dataset</h4>
                <p className="text-sm text-gray-600">Contains 60 competition problems</p>
              </div>
              <Button 
                color="primary"
                endContent={<Download size={20} />}
                onClick={() => handleDownload("test_data.csv")}
              >
                Download CSV
              </Button>
            </div>

            {/* Submission Format */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Submission Format</h4>
                <p className="text-sm text-gray-600">Template for submitting your answers</p>
              </div>
              <Button 
                color="primary"
                endContent={<Download size={20} />}
                onClick={() => handleDownload("submission_format.csv")}
              >
                Download CSV
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}