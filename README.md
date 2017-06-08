# Pig Latin Generator
A web page that accepts a word in English and provides Pig Latin version.


|Behavior - Plain English|Input|Output|
|---|---|---|
|Do nothing to non-alpha string|"33"|"33"|ß
|Add "way" to one-letter word consisting of a vowel|"a"|"away"|
|Add "way" to any single words that begins with a vowel|"away"|"awayway"|
|For words beginning with one consonant, move consonant to end of word and add "ay"|"pack"|"ackpay"|
|"Y" is considered a consonant|"yard"|"ardyay"|
|For words beginning with "qu", move "qu" to end of word and add "ay"|"queen"|"eenquay"|
|For words beginning with >1 consonants, move consonants to end of word (in order) and add "ay"|"pray"|"aypray"|
|For words that do not begin with "q", but have "q" in beginning consonant cluster, move consonant cluster INCLUDING the "u" to the end of the word and add "ay"|"squeal"|"ealsquay"|

## What's included
Within the repository you'll find the following directories and files:

```
pig_latin/
├── css/
│    ├── theme.css
│    └── styles.css
├── js/
│    ├── jquery-3.2.1.js
│    └── script.js
├── index.html
└── README.md
```


## Technologies Used
* JavaScript
* jQuery
* Bootstrap

### License
Copyright 2017 Anna Timofeeva and Michael Dunlap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
