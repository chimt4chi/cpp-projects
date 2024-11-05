#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iomanip>
#include <dirent.h>
#include <chrono>
#include <thread>
using namespace std;

const vector<string> Remove_Words = {"a", "and", "an", "of", "in", "the"};
const int TOP_N = 10;

// Function to normalize a word by converting it to uppercase
string normalizeWord(const string &word)
{
  string normalized;
  for (char ch : word)
  {
    if (isalpha(ch) || isdigit(ch))
    {
      normalized += toupper(ch);
    }
  }
  return normalized;
}

// Function to read a file and calculate normalized word frequencies
void calculateWordFrequencies(const string &filename, unordered_map<string, double> &wordFreq, double &totalWords)
{
  ifstream file(filename);
  if (!file)
  {
    cerr << "Could not open the file: " << filename << endl;
    return;
  }

  string word;
  unordered_map<string, int> countMap;
  totalWords = 0;

  while (file >> word)
  {
    word = normalizeWord(word);
    if (!word.empty() && find(Remove_Words.begin(), Remove_Words.end(), word) == Remove_Words.end())
    {
      countMap[word]++;
      totalWords++;
    }
  }

  // Normalize frequencies
  for (const auto &pair : countMap)
  {
    wordFreq[pair.first] = static_cast<double>(pair.second) / totalWords;
  }
}

// Function to calculate similarity index between two sets of word frequencies
double calculateSimilarity(const unordered_map<string, double> &freq1, const unordered_map<string, double> &freq2)
{
  double similarity = 0.0;

  for (const auto &pair : freq1)
  {
    const string &word = pair.first;
    if (freq2.find(word) != freq2.end())
    {
      similarity += pair.second + freq2.at(word);
    }
  }
  return similarity;
}

// Function to check if a filename ends with a specific extension
bool hasExtension(const string &filename, const string &extension)
{
  if (filename.length() >= extension.length())
  {
    return filename.compare(filename.length() - extension.length(), extension.length(), extension) == 0;
  }
  return false;
}

// Main function to compute similarity matrix and find top similar pairs
int main()
{
  vector<string> filenames;
  DIR *dir;
  struct dirent *ent;

  // Change this to the directory containing your text files
  const char *directoryPath = "./Book-Txt";

  if ((dir = opendir(directoryPath)) != nullptr)
  {
    while ((ent = readdir(dir)) != nullptr)
    {
      if (ent->d_type == DT_REG)
      { // Only consider regular files
        string filename = ent->d_name;
        if (hasExtension(filename, ".txt"))
        {                                // Check for .txt extension
          filenames.push_back(filename); // Store only the filename
        }
      }
    }
    closedir(dir);
  }
  else
  {
    cerr << "Could not open directory: " << directoryPath << endl;
    return 1;
  }

  int numTextbooks = filenames.size();
  if (numTextbooks == 0)
  {
    cerr << "No textbooks found in the specified directory." << endl;
    return 1;
  }

  unordered_map<string, double> wordFreq[numTextbooks];
  double totalWords[numTextbooks] = {0};
  double similarityMatrix[numTextbooks][numTextbooks] = {0};

  // Loading message before reading files
  cout << "Loading textbooks and calculating word frequencies...\n";
  for (int i = 0; i < numTextbooks; ++i)
  {
    // Simulate some delay for the loading effect
    if (i % 5 == 0)
      cout << "Processing file " << i + 1 << " of " << numTextbooks << "...\n";
    calculateWordFrequencies(directoryPath + string("/") + filenames[i], wordFreq[i], totalWords[i]);
  }

  // Loading message before calculating similarity matrix
  cout << "Calculating similarity matrix...\n";
  for (int i = 0; i < numTextbooks; ++i)
  {
    for (int j = i + 1; j < numTextbooks; ++j)
    {
      similarityMatrix[i][j] = calculateSimilarity(wordFreq[i], wordFreq[j]);
      similarityMatrix[j][i] = similarityMatrix[i][j]; // Symmetric matrix
    }
  }

  // Find top 10 similar pairs
  vector<pair<double, pair<int, int>>> similarities;

  for (int i = 0; i < numTextbooks; ++i)
  {
    for (int j = i + 1; j < numTextbooks; ++j)
    {
      similarities.emplace_back(similarityMatrix[i][j], make_pair(i, j));
    }
  }

  sort(similarities.begin(), similarities.end(), greater<>());

  // Display final loading message before showing results
  cout << "Processing complete. Displaying top " << TOP_N << " similar pairs...\n";

  // Display top 10 similar pairs
  cout << "\nTop " << TOP_N << " Similar Pairs of Textbooks:\n";
  for (int i = 0; i < TOP_N && i < similarities.size(); ++i)
  {
    cout << "Pair " << i + 1 << ": " << filenames[similarities[i].second.first] << " and "
         << filenames[similarities[i].second.second] << " with similarity index: "
         << fixed << setprecision(4) << similarities[i].first << endl;
  }

  return 0;
}
