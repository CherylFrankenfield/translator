# Pig latin Translator
### A tool to translate plain english to pig latin 10/25/17
### by Connor Miller , Cheryl Frankenfield, Grant Rotzien

## Description

This is a simple tool to translate english to pig latin. Through the user input, it will translate the english input to a pig latin output.

## Instructions

* git clone repo (insert repo)
* open index.html file in browser
* translate away

## Specs

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
⁃	Example Input: 3
⁃	Example Output: 3

The program adds “way" to single-letter words beginning with a vowel.
⁃	Example Input: i
⁃	Example Output: iway

The program adds “way" to multiple-letter words beginning with a vowel.
⁃	Example:  - igloo
⁃	Example Output: iglooway

The program adds “way" to multiple words beginning with vowels.
⁃	Example Input: “I am an adult”
⁃	Example Output:  “iway amway anway adultway”

The program treats words beginning with y as a consonant.
⁃	Example Input: Yes
⁃	Example Output: esYay

The program adds “ay” to single-letter words beginning with a consonant.
⁃	Example: y - Spanish
⁃	Example Output: yay

The program adds “ay” to multiple-letter words beginning with a consonant.
⁃	Example: Hello -
⁃	Example Output: elloHay

The program adds “ay" to multiple words beginning with consonants.
⁃	Example Input: The dog pooped prominently.
⁃	Example Output: ethay ogday oopedpay ominentlypra

The program moves consecutive consonants to the end of a word then added “ay”.
⁃	Example: There
⁃	Example Output: ereThay

The program treats “qu” as a consonant and pair and moves them together if it starts a word then added “ay”.
⁃	Example: Squeal
⁃	Example Output: ealSquay

## known bugs

* not yet :)

## support & contact me

We are always open to new tips, tricks, or ideas to make the page run smoother or look better. Email me @ moist.translate@hotmail.com

## tech

* Html
* CSS
* Bootstrap
* Javascript
* Jquery

## license

Open source. Feel free to pull, copy, edit, etc.
