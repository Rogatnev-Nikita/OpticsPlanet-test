# OpticsPlanet-test
## Goal:
Create a shipping estimate widget that calculates how long it will take to ship a package from warehouse to customer. You can use html, css, js; your favorite frameworks or libraries, and any internet services you want.

## UI Input:
Must have input box for customer zip code (USA only). There are currently 2 warehouses, located in these 2 zip codes: 94117, 60062

## UI Display:
After zip code is entered and focus has left zip code input box, the following should happen:
* determine closest warehouse to customer zip by getting distance between customer zip and each warehouse zip;
* determine city and state of closest warehouse;
* determine city and state of customer zip (so customer has confidence correct shipping was entered);
* display estimated days to ship from warehouse city/state to customer city/state, using simple formula: 1 day if distance is <100 miles, 2 days if < 600 miles, 3-4 days < 2000 miles, else 4+ days.

## Evaluation Notes:
* Code should work, should be easy to read and maintain;
* It should be trivial to add or remove a warehouse zip, and then reload;
* Consider warning/error msgs;
* Be creative with UI.
* 
Don't spend too much time on one area if you get stuck - just make a comment and move on.<br>
Hint: http://samo.org/op/zip/60062/60647/

## Result:
http://rogatnev-nikita.github.io/OpticsPlanet-test
