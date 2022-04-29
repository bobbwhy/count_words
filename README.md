# fun

Compares two methods of counting word appearances in a text.

Both methods start with the text in src/decl-main.txt 
and count the appearances of each unique word in this text, 
eliminating special characters except '-' and converting all 
words to lower case.

The method will be run several times using text of different 
lengths to characterize performance.

To get the texts of different lengths, the text is appended 
to itself by a multiple - 1.  So, if the multiple is 2, the 
text will be 2 times its original length;


The scripts listed below will both multiply the text by
1, 100,000, 200,000, 300,000, 400,000 times.

Results listed below are in a MacBook M1 Max with 64GB RAM node 16.


## To use:
### Split, Sort, Count Method
`
    yarn count
`



**Results:**
* multiple: 1, elapsed: 15
* multiple: 100000, elapsed: 5754
* multiple: 200000, elapsed: 11914
* multiple: 300000, elapsed: 25130
* multiple: 400000, elapsed: 28766





### Split, Count Method
`
    yarn count:split_count
`

**Results**
* multiple: 1, elapsed: 15
* multiple: 100000, elapsed: 2226
* multiple: 200000, elapsed: 4435
* multiple: 300000, elapsed: 8084
* multiple: 400000, elapsed: 9900


Yes.. the second method is much better.
