# OpticsPlanet-test
<h4>Goal:</h4>
Create a shipping estimate widget that calculates how long it will take to ship a package from warehouse to customer. You can use html, css, js; your favorite frameworks or libraries, and any internet services you want.

<h4>UI Input:</h4>
Must have input box for customer zip code (USA only). There are currently 2 warehouses, located in these 2 zip codes: 94117, 60062

<h4>UI Display:</h4>
After zip code is entered and focus has left zip code input box, the following should happen:
<ul>
<li>determine closest warehouse to customer zip by getting distance between customer zip and each warehouse zip</li>
<li>determine city and state of closest warehouse</li>
<li>determine city and state of customer zip (so customer has confidence correct shipping was entered)</li>
<li>display estimated days to ship from warehouse city/state to customer city/state, using simple formula: 1 day if distance is <100 miles, 2 days if < 600 miles, 3-4 days < 2000 miles, else 4+ days.</li>
</ul>

<h4>Evaluation Notes:</h4>
<ul>
<li>Code should work, should be easy to read and maintain.</li>
<li>It should be trivial to add or remove a warehouse zip, and then reload.</li>
<li>Consider warning/error msgs</li>
<li>Be creative with UI</li>
</ul>
Don't spend too much time on one area if you get stuck - just make a comment and move on.<br>
Hint: http://samo.org/op/zip/60062/60647/

<h4>Result:</h4>
http://rogatnev-nikita.github.io/OpticsPlanet-test
