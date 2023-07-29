#!/bin/bash

# Function to scale the image
function scale_image {
    input_file="$1"
    output_file="$2"

    # Get the original dimensions
    original_width=$(identify -format "%w" "$input_file")
    original_height=$(identify -format "%h" "$input_file")

    # Calculate the new width based on the desired height of 1625 pixels
    new_width=$((original_width * 1625 / original_height))

    # Scale the image to the new dimensions
    convert "$input_file" -resize "${new_width}x1625" "$output_file"
}

# Check if 'convert' command is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required for this script to work. Please install it: brew install imagemagick"
    exit 1
fi

# Iterate through all files in the current directory
for file in *; do
    # Check if the file is an image (using case-insensitive pattern matching)
    if [[ "$file" =~ \.(jpg|jpeg|png|gif|bmp)$ ]]; then
        # Generate the output filename by appending "_scaled" to the original filename
        output_file="scaled_${file%.*}.${file##*.}"

        # Scale the image
        scale_image "$file" "$output_file"

        echo "Scaled '$file' to '$output_file'"
    fi
done
