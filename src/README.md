# COVID19 By Nabil!

Created a very simple COVID19 app with 2 main functionalities:

- Loading the global numbers and displaying those
- Fetching the list of countries and displaying the numbers dependant on the selected country


# Getting up and running

>npm install && npm run dev

# Tech used
- React
- Material UI
- Redux-toolkit
- RTK Query (!)



# Lessons learned

In the past I've used React and Redux core. But I had the chance today to play with something and that's the new recommended way: Redux-toolkit and RTK query. The very cool stuff with RTK Query, out of the box, they provide caching for your calls within a certain time limit!!
To test this follow this steps:

- Open dev tools
- Select a country in the dropdown
- Check the network tab
- Select another country, a new request is being sent out
- Now select the first country you have selected, no new request is being sent out. It's being cached in redux. If you wait long enough it will clear its cache IF the data hasn't been used anymore for about 30 seconds to a minute.
