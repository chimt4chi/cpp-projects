# Textbook Similarity Analysis

This program calculates and displays the similarity between multiple text files (textbooks) in a specified directory by analyzing their word frequencies and comparing them. The program uses a similarity index based on the frequency distribution of words after normalizing and removing common stopwords.

## Features

- **File Processing**: Reads text files from a specified directory.
- **Word Normalization**: Converts words to uppercase and removes non-alphanumeric characters.
- **Word Removal**: Excludes common stopwords (e.g., "a", "the", "and") from the analysis.
- **Similarity Calculation**: Computes a similarity index between each pair of text files based on their word frequency distributions.
- **Top Pairs**: Displays the top N most similar pairs of text files.

## Requirements

- C++ compiler (e.g., `g++` or `clang++`)
- Standard C++ libraries (no external dependencies)

## Installation

1. Clone the repository or download the `main.cpp` file to your local machine.
2. Make sure you have a directory containing text files to analyze (e.g., `./Book-Txt`) you can change the directory by replacing the directory name in the `directoryPath` variable in the main function .
3. Compile the program using your preferred C++ compiler:

   ```bash
   g++ main.cpp -o TextbookSimilarity
   ```

4. Run the compiled program:

   ```bash
   ./TextbookSimilarity
   ```

## How It Works

1. **Directory Structure**:
   The program expects a directory containing `.txt` files. It will process all `.txt` files found in that directory.

   Example directory structure:
   ```
   ./Book-Txt/
       book1.txt
       book2.txt
       book3.txt
   ```

2. **Word Frequency Calculation**:
   The program reads each `.txt` file, normalizes the words (by converting them to uppercase and removing non-alphanumeric characters), and counts the frequency of each unique word, excluding common stopwords.

3. **Similarity Calculation**:
   After processing the files, the program calculates the similarity index between every pair of text files using the following formula:
   - Similarity is calculated as the sum of word frequencies that appear in both files, normalized by the total word count in each file.

4. **Top N Similar Pairs**:
   The program then sorts the similarity indices in descending order and displays the top `N` most similar pairs of files (default is 10).

## Configuration

- **Directory Path**: The directory containing the `.txt` files is set in the code as `./Book-Txt`. You can change this path to point to your desired folder.
  
- **Stopwords**: The stopwords list is predefined as `{"a", "and", "an", "of", "in", "the"}`. You can add more stopwords to this list as needed.

- **Top N**: The program displays the top `TOP_N` similar pairs of text files. The default value is 10, but you can adjust the `TOP_N` constant in the code.

## Example Output

```
Loading textbooks and calculating word frequencies...
Processing file 1 of 3...
Processing file 2 of 3...
Processing file 3 of 3...
Calculating similarity matrix...
Processing complete. Displaying top 10 similar pairs...

Top 10 Similar Pairs of Textbooks:
Pair 1: book1.txt and book3.txt with similarity index: 0.3241
Pair 2: book2.txt and book3.txt with similarity index: 0.2983
Pair 3: book1.txt and book2.txt with similarity index: 0.2736
```
