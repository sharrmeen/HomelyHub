import json
import os

def extract_oid(obj):
    if isinstance(obj, dict):
        # Convert {"$oid": "..."} to plain string
        if "$oid" in obj and len(obj) == 1:
            return obj["$oid"]
        # Recursively process nested dict
        return {key: extract_oid(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [extract_oid(item) for item in obj]
    else:
        return obj

def main():
    input_file = "Database/test.properties.json"      
    output_file = "Database/cleaned_properties.json" # New file to save cleaned output

    if not os.path.exists(input_file):
        print(f"❌ File not found: {input_file}")
        return

    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    cleaned_data = extract_oid(data)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(cleaned_data, f, indent=2)

    print(f"✅ Cleaned JSON written to: {output_file}")

if __name__ == "__main__":
    main()
