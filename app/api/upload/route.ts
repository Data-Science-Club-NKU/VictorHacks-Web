import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "papaparse";

// Function to calculate RMSE
function calculateRMSE(actual: number[], predicted: number[]): number {
    if (actual.length !== predicted.length) {
        throw new Error("The uploaded CSV and the correct output must have the same number of rows.");
    }
    
    const mse = actual.reduce((sum, actualValue, index) => {
        const predictedValue = predicted[index];
        return sum + Math.pow(actualValue - predictedValue, 2);
    }, 0) / actual.length;
    
    return Math.sqrt(mse);
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        
        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Read the uploaded file as text
        const uploadedText = await file.text();
        const uploadedData = parse(uploadedText, { header: true }).data;  // Set header: true

        // Read the locally stored correct output CSV
        const correctFilePath = path.join(process.cwd(), "app", "competitions", "tabs", "data", "Correct_output_to_validate.csv");
        const correctText = fs.readFileSync(correctFilePath, "utf-8");
        const correctData = parse(correctText, { header: true }).data;  // Set header: true

        // Convert to numerical arrays using the 'Rings' column
        const uploadedValues = uploadedData
            .map((row: any) => parseFloat(row.Rings))
            .filter(val => !isNaN(val));
        const correctValues = correctData
            .map((row: any) => parseFloat(row.Rings))
            .filter(val => !isNaN(val));

        // Calculate RMSE
        const rmse = calculateRMSE(correctValues, uploadedValues);
        console.log("RMSE Score:", rmse);

        return NextResponse.json({ message: "File received successfully", rmse: rmse });
    } catch (error) {
        console.error("Error processing file upload:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}