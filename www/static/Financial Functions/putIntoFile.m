function outArr = putIntoFile(in)

header = {'Ticker', 'Recent Price', 'Change'}

tickers = [];
prices = [];
changes = [];
c = yahoo;
for s = in
    d = fetch(c, s)
    tickers = [tickers s];
    prices = [prices {d.Last}];
    changes = [changes {d.Change}];
end

data = [tickers', prices', changes'];

allD = [header; data];

outArr = data;

lines = [];

for x = 1:length(prices)

    lines = [lines sprintf('%6.2f  %5.2f  %s\n', prices{x}, changes{x}, tickers{x})];
end
lines
newFile = fopen('stockInfo.txt', 'w');
fprintf(newFile, lines);

outArr = allD;
end