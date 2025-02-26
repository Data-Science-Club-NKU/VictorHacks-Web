import { Card, CardBody, Button } from "@nextui-org/react";
import { Download, FileText, Database, PieChart, Trophy, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function DataTab() {
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const datasets = [
    {
      id: "train",
      name: "Training Dataset",
      description: "Contains 50 practice problems with solutions",
      filename: "train.csv",
      icon: <FileText className="text-emerald-500" />,
      stats: { problems: 50, complexity: "Medium", format: "CSV", size: "1.2 MB" },
      color: "from-emerald-500 to-teal-400"
    },
    {
      id: "test",
      name: "Test Dataset",
      description: "Contains 60 competition problems",
      filename: "test.csv",
      icon: <Database className="text-violet-500" />,
      stats: { problems: 60, complexity: "High", format: "CSV", size: "1.5 MB" },
      color: "from-violet-500 to-purple-400"
    },
    {
      id: "submission",
      name: "Submission Format",
      description: "Template for submitting your answers",
      filename: "Sample_submission.csv",
      icon: <PieChart className="text-amber-500" />,
      stats: { problems: 60, complexity: "Low", format: "CSV", size: "0.3 MB" },
      color: "from-amber-500 to-orange-400"
    }
  ];

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
    <Card className="border-none shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <CardBody className="p-0">
        <div className="p-6 pb-0">
          <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Mathematics Competition Dataset
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore our comprehensive AIME-style mathematics problems with integer answers ranging from 0 to 999.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row p-6 gap-6">
          {/* Left column - Files list */}
          <div className="lg:w-1/2 space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Available Resources</h3>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Trophy size={14} className="mr-1" />
                <span>3 files</span>
              </div>
            </div>
            
            {datasets.map((dataset) => (
              <div 
                key={dataset.id}
                onClick={() => setActiveFile(dataset.id)}
                className={`
                  relative overflow-hidden p-4 rounded-xl cursor-pointer transition-all border
                  ${activeFile === dataset.id 
                    ? 'border-blue-400 dark:border-blue-500 shadow-md bg-white dark:bg-gray-800' 
                    : 'border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800'}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${dataset.color} text-white`}>
                    {dataset.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      {dataset.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {dataset.description}
                    </p>
                  </div>
                  <ChevronRight 
                    size={18} 
                    className={`text-gray-400 transition-transform ${activeFile === dataset.id ? 'rotate-90' : ''}`} 
                  />
                </div>
                
                {/* Glowing background effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${dataset.color} opacity-0 transition-opacity ${activeFile === dataset.id ? 'opacity-5' : 'hover:opacity-5'}`}></div>
              </div>
            ))}
          </div>
          
          {/* Right column - File details */}
          <div className="lg:w-1/2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {activeFile ? (
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${datasets.find(d => d.id === activeFile)?.color} text-white`}>
                      {datasets.find(d => d.id === activeFile)?.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                        {datasets.find(d => d.id === activeFile)?.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {datasets.find(d => d.id === activeFile)?.filename}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {Object.entries(datasets.find(d => d.id === activeFile)?.stats || {}).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                        <div className="font-medium text-gray-800 dark:text-gray-200">{value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <p>This file contains mathematics problems similar to the American Invitational Mathematics Examination (AIME).</p>
                    <p>Each problem has a single integer answer between 0 and 999.</p>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-5 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30">
                  <Button 
                    size="lg"
                    className={`w-full bg-gradient-to-r ${datasets.find(d => d.id === activeFile)?.color} text-white`}
                    endContent={<Download size={18} />}
                    onClick={() => handleDownload(datasets.find(d => d.id === activeFile)?.filename || "")}
                  >
                    Download File
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                  <FileText size={24} className="text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Select a file to view details
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Click on any of the resources to see more information
                </p>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}