# MERS-MIN

## Purpose
Referring to the MERS(Mortgage Electronic Registration Systems), this module uses a mod 10 weight 2 algorithm on a 18-digit string (comprised of a 7-digit organization ID and up to 10-digit loan number) to compute the 18th checksum digit.

The organizaion id + loan number + checksum digit should yield a valid 18-digit MIN(Mortgage Identification Number)

## Installation
* install node module `npm install mers --save`
* use in application `var mers = require('mers')`

## Methods

### generate(orgID, loanNum)
* @param orgID: your 7-digit MERs org ID
* @param loanNum: loan number not to exceed 10 digits
* output: [jsonObject]
 * orgID: 7-digit org ID
 * loanNum: 10-digit parsed loan number
 * digit: valid check sum digit
 * min: 18-digit MIN number

### validate(minNum)
* @param minNum: 18 digit Mortgage Instrument Number(MIN)
* output: [boolean] checks if MIN is a valid format
