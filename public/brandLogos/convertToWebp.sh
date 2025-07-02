#!bin/bash

for file in ./unoptimised/*; do
  [ -e "$file" ] || continue # skip if no .png files
  filename=$(basename "$file" .jpg)
  cwebp -q 50 "$file" -o "webpTest/${filename}.webp"
done
