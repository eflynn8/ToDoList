function fullPlot(s, sd, ed)
n = now 
sd = datenum(sd)
ed = datenum(ed)
sd = round(n - sd)
ed = round(n - ed)
days = sd:-1:ed;


c = yahoo;
things = fetch(c,s,sd,ed);
prices = things(:,2)
dates = things(:,1)
clf

subplot(1,2,1);

plot(length(prices), prices, 'k-')
subplot(1,2,2);




end