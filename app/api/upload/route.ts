import { NextRequest, NextResponse } from "next/server";
import { parse } from "papaparse";

// Define a type for CSV rows
interface CSVRow {
    Rings: number;
}

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
        const file = formData.get("file");

        if (!(file instanceof Blob)) {
            return NextResponse.json({ error: "Invalid file upload" }, { status: 400 });
        }

        // Convert uploaded file to text
        const uploadedText = await file.text();
        const uploadedData: CSVRow[] = parse<CSVRow>(uploadedText, { header: true, dynamicTyping: true }).data;

        // 🔥 Fetch the correct reference CSV from an API or database instead of `fs`
        const correctFileUrl = "https://your-api.com/correct_output.csv"; // ✅ Replace with actual source
        const correctResponse = await fetch(correctFileUrl);
        const correctText = await correctResponse.text();
        const correctData: CSVRow[] = parse<CSVRow>(correctText, { header: true, dynamicTyping: true }).data;

        // Convert CSV data into numerical arrays using 'Rings' column
        const uploadedValues: number[] = uploadedData
            .map((row) => row.Rings)
            .filter((val) => !isNaN(val));

        const correctValues: number[] = correctData
            .map((row) => row.Rings)
            .filter((val) => !isNaN(val));

        if (uploadedValues.length === 0 || correctValues.length === 0) {
            return NextResponse.json({ error: "No valid numerical data found in the uploaded or reference CSV." }, { status: 400 });
        }

        // Calculate RMSE
        const rmse = calculateRMSE(correctValues, uploadedValues);
        console.log("RMSE Score:", rmse);

        return NextResponse.json({ message: "File received successfully", rmse });
    } catch (error) {
        console.error("Error processing file upload:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
