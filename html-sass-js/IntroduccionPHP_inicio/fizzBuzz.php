<?php
include 'includes/header.php';

echo "FIZZ => i % 3 == 0 <br> BUZZ => i % 5 == 0 <br> FIZZBUZZ => i % 3 && i % 5 == 0 <br><br><br>";

for($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo $i . " -->" . " FIZZBUZZ";
        echo "<br>";
    } else if($i % 3 == 0) {
        echo $i . " -->" . " FIZZ";
        echo "<br>";
    } else if ($i % 5 == 0) {
        echo $i . " -->" . " BUZZ";
        echo "<br>";
    } else {
        echo $i;
        echo "<br>";
    }
};



include 'includes/footer.php';