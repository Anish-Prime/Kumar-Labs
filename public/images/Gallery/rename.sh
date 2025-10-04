#!/bin/bash
COUNTER=1
for FILE in *.jpg *JPG *.jpeg *.png *.webp; do
  if [ -f "$FILE" ]; then
    EXTENSION="${FILE##*.}"
    mv -- "$FILE" "img${COUNTER}.${EXTENSION}"
    let COUNTER=COUNTER+1
  fi
done
echo "Renaming complete! ✨"