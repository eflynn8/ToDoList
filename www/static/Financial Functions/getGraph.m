function outArr = getGraph(s, datestart, dateend)


c = yahoo;
clf
d = fetch(c,s,'Close',datestart,dateend)
d = d(:,2)
plot(1:length(d), d, 'k-');


end