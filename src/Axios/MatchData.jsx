import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const matches = [
    {
      match_number: 13,
      team1: "Punjab Kings",
      team1_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743151693/IPL_TIME_LOGO/Punjab_Kings.avif",
      team2: "Lucknow Super Giants",
      team2_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
      date: "1 April 2025",
      time: "7:30 PM IST",
      venue: "Punjab Cricket Association IS Bindra Stadium, Mohali",
      stadium_image: "https://indiaongo.in/wp-content/uploads/2022/09/ekana-stadium-seating-map-lucknow.jpg",
    },
    {
      match_number: 14,
      team1: "Gujarat Titans",
      team1_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
      team2: "Royal Challengers Bengaluru",
      team2_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
      date: "2 April 2025",
      time: "7:30 PM IST",
      venue: "Narendra Modi Stadium, Ahmedabad",
      stadium_image:
        "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-10-02_at_18.06.17.webp",
    },
    {
      match_number: 15,
      team1: "Sunrisers Hyderabad",
      team1_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
      team2: "Kolkata Knight Riders",
      team2_logo:
        "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
      date: "3 April 2025",
      time: "7:30 PM IST",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      stadium_image:
        "https://ipltickets.in/wp-content/uploads/2024/02/kolkata-eden-gardens-stadium-stands-pavilions-seat-chart.jpg",
    },
    {
        "match_number": 15_1,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Kolkata Knight Riders",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "date": "4 April 2025",
        "time": "7:30 PM IST",
        "venue": "Punjab Cricket Association IS Bindra Stadium, Mohali",
        "stadium_image": "https://example.com/IS_Bindra_Stadium.jpg"
      },
      {
        "match_number": 16,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "5 April 2025",
        "time": "3:30 PM IST",
        "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 17,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Punjab Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "date": "5 April 2025",
        "time": "7:30 PM IST",
        "venue": "Rajiv Gandhi International Stadium, Hyderabad",
        "stadium_image": "https://example.com/Rajiv_Gandhi_Stadium.jpg"
      },
      {
        "match_number": 18,
        "team1": "Rajasthan Royals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "team2": "Royal Challengers Bengaluru",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "date": "6 April 2025",
        "time": "3:30 PM IST",
        "venue": "Sawai Mansingh Stadium, Jaipur",
        "stadium_image": "https://example.com/Sawai_Mansingh_Stadium.jpg"
      },
      {
        "match_number": 19,
        "team1": "Delhi Capitals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "team2": "Mumbai Indians",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "date": "6 April 2025",
        "time": "7:30 PM IST",
        "venue": "Arun Jaitley Stadium, Delhi",
        "stadium_image": "https://example.com/Arun_Jaitley_Stadium.jpg"
      },
      {
        "match_number": 20,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Chennai Super Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "date": "7 April 2025",
        "time": "7:30 PM IST",
        "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 21,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Kolkata Knight Riders",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "date": "8 April 2025",
        "time": "7:30 PM IST",
        "venue": "Punjab Cricket Association IS Bindra Stadium, Mohali",
        "stadium_image": "https://example.com/IS_Bindra_Stadium.jpg"
      },
      {
        "match_number": 22,
        "team1": "Delhi Capitals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "team2": "Rajasthan Royals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "date": "9 April 2025",
        "time": "7:30 PM IST",
        "venue": "Arun Jaitley Stadium, Delhi",
        "stadium_image": "https://example.com/Arun_Jaitley_Stadium.jpg"
      },
      {
        "match_number": 23,
        "team1": "Mumbai Indians",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "team2": "Sunrisers Hyderabad",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "date": "10 April 2025",
        "time": "7:30 PM IST",
        "venue": "Wankhede Stadium, Mumbai",
        "stadium_image": "https://example.com/Wankhede_Stadium.jpg"
      },
      {
        "match_number": 24,
        "team1": "Royal Challengers Bengaluru",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "team2": "Punjab Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "date": "11 April 2025",
        "time": "7:30 PM IST",
        "venue": "M. Chinnaswamy Stadium, Bengaluru",
        "stadium_image": "https://example.com/M_Chinnaswamy_Stadium.jpg"
      },
      {
        "match_number": 25,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "12 April 2025",
        "time": "3:30 PM IST",
        "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 26,
        "team1": "Mumbai Indians",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "team2": "Chennai Super Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "date": "12 April 2025",
        "time": "7:30 PM IST",
        "venue": "Wankhede Stadium, Mumbai",
        "stadium_image": "https://example.com/Wankhede_Stadium.jpg"
      },
      {
        "match_number": 27,
        "team1": "Rajasthan Royals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "team2": "Sunrisers Hyderabad",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "date": "13 April 2025",
        "time": "3:30 PM IST",
        "venue": "Sawai Mansingh Stadium, Jaipur",
        "stadium_image": "https://example.com/Sawai_Mansingh_Stadium.jpg"
      },
      {
        "match_number": 28,
        "team1": "Delhi Capitals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "team2": "Lucknow Super Giants",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "date": "13 April 2025",
        "time": "7:30 PM IST",
        "venue": "Arun Jaitley Stadium, Delhi",
        "stadium_image": "https://example.com/Arun_Jaitley_Stadium.jpg"
      },
      {
        "match_number": 29,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Royal Challengers Bengaluru",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "date": "14 April 2025",
        "time": "7:30 PM IST",
        "venue": "IS Bindra Stadium, Mohali",
        "stadium_image": "https://example.com/IS_Bindra_Stadium.jpg"
      },
      {
        "match_number": 30,
        "team1": "Gujarat Titans",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "team2": "Kolkata Knight Riders",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "date": "15 April 2025",
        "time": "7:30 PM IST",
        "venue": "Narendra Modi Stadium, Ahmedabad",
        "stadium_image": "https://example.com/Narendra_Modi_Stadium.jpg"
      },
      {
        "match_number": 31,
        "team1": "Chennai Super Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "team2": "Delhi Capitals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "date": "16 April 2025",
        "time": "7:30 PM IST",
        "venue": "MA Chidambaram Stadium, Chennai",
        "stadium_image": "https://example.com/MA_Chidambaram_Stadium.jpg"
      },
      {
        "match_number": 32,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Punjab Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "date": "17 April 2025",
        "time": "7:30 PM IST",
        "venue": "Rajiv Gandhi International Stadium, Hyderabad",
        "stadium_image": "https://example.com/Rajiv_Gandhi_Stadium.jpg"
      },
      {
        "match_number": 33,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Mumbai Indians",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "date": "18 April 2025",
        "time": "7:30 PM IST",
        "venue": "Ekana Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 34,
        "team1": "Royal Challengers Bengaluru",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "19 April 2025",
        "time": "3:30 PM IST",
        "venue": "M. Chinnaswamy Stadium, Bengaluru",
        "stadium_image": "https://example.com/Chinnaswamy_Stadium.jpg"
      },
      {
        "match_number": 35,
        "team1": "Kolkata Knight Riders",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "team2": "Delhi Capitals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "date": "19 April 2025",
        "time": "7:30 PM IST",
        "venue": "Eden Gardens, Kolkata",
        "stadium_image": "https://example.com/Eden_Gardens.jpg"
      },
      {
        "match_number": 36,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Chennai Super Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "date": "20 April 2025",
        "time": "3:30 PM IST",
        "venue": "Rajiv Gandhi International Stadium, Hyderabad",
        "stadium_image": "https://example.com/Rajiv_Gandhi_Stadium.jpg"
      },
      {
        "match_number": 37,
        "team1": "Mumbai Indians",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "team2": "Lucknow Super Giants",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "date": "20 April 2025",
        "time": "7:30 PM IST",
        "venue": "Wankhede Stadium, Mumbai",
        "stadium_image": "https://example.com/Wankhede_Stadium.jpg"
      },
      {
        "match_number": 38,
        "team1": "Royal Challengers Bengaluru",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "team2": "Punjab Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "date": "21 April 2025",
        "time": "7:30 PM IST",
        "venue": "M. Chinnaswamy Stadium, Bengaluru",
        "stadium_image": "https://example.com/Chinnaswamy_Stadium.jpg"
      },
      {
        "match_number": 39,
        "team1": "Gujarat Titans",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "team2": "Rajasthan Royals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "date": "22 April 2025",
        "time": "7:30 PM IST",
        "venue": "Narendra Modi Stadium, Ahmedabad",
        "stadium_image": "https://example.com/Narendra_Modi_Stadium.jpg"
      },
      {
        "match_number": 40,
        "team1": "Delhi Capitals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "team2": "Sunrisers Hyderabad",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "date": "23 April 2025",
        "time": "7:30 PM IST",
        "venue": "Arun Jaitley Stadium, Delhi",
        "stadium_image": "https://example.com/Arun_Jaitley_Stadium.jpg"
      },
      {
        "match_number": 41,
        "team1": "Chennai Super Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "team2": "Royal Challengers Bengaluru",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "date": "24 April 2025",
        "time": "7:30 PM IST",
        "venue": "MA Chidambaram Stadium, Chennai",
        "stadium_image": "https://example.com/MA_Chidambaram_Stadium.jpg"
      },
      {
        "match_number": 42,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Kolkata Knight Riders",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "date": "25 April 2025",
        "time": "7:30 PM IST",
        "venue": "IS Bindra Stadium, Mohali",
        "stadium_image": "https://example.com/IS_Bindra_Stadium.jpg"
      },
      {
        "match_number": 43,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Mumbai Indians",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "date": "26 April 2025",
        "time": "7:30 PM IST",
        "venue": "Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 44,
        "team1": "Rajasthan Royals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "team2": "Delhi Capitals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "date": "27 April 2025",
        "time": "3:30 PM IST",
        "venue": "Sawai Mansingh Stadium, Jaipur",
        "stadium_image": "https://example.com/Sawai_Mansingh_Stadium.jpg"
      },
      {
        "match_number": 45,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "27 April 2025",
        "time": "7:30 PM IST",
        "venue": "Rajiv Gandhi International Stadium, Hyderabad",
        "stadium_image": "https://example.com/Rajiv_Gandhi_Stadium.jpg"
      },
      {
        "match_number": 45_1,
        "team1": "Chennai Super Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "team2": "Punjab Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "date": "28 April 2025",
        "time": "7:30 PM IST",
        "venue": "MA Chidambaram Stadium, Chennai",
        "stadium_image": "https://example.com/MA_Chidambaram_Stadium.jpg"
      },
      {
        "match_number": 45_2,
        "team1": "Kolkata Knight Riders",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        "team2": "Royal Challengers Bengaluru",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "date": "29 April 2025",
        "time": "7:30 PM IST",
        "venue": "Eden Gardens, Kolkata",
        "stadium_image": "https://example.com/Eden_Gardens.jpg"
      },
      {
        "match_number": 45_3,
        "team1": "Mumbai Indians",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Mumbai_Indians.avif",
        "team2": "Delhi Capitals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "date": "30 April 2025",
        "time": "7:30 PM IST",
        "venue": "Wankhede Stadium, Mumbai",
        "stadium_image": "https://example.com/Wankhede_Stadium.jpg"
      },
      {
        "match_number": 45_4,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Chennai Super Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "date": "1 May 2025",
        "time": "7:30 PM IST",
        "venue": "Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      },
      {
        "match_number": 45_5,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "2 May 2025",
        "time": "7:30 PM IST",
        "venue": "IS Bindra Stadium, Mohali",
        "stadium_image": "https://example.com/IS_Bindra_Stadium.jpg"
      },
      {
        "match_number": 45_6,
        "team1": "Rajasthan Royals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "team2": "Royal Challengers Bengaluru",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150376/IPL_TIME_LOGO/Royal_Challengers_Bengaluru.avif",
        "date": "3 May 2025",
        "time": "7:30 PM IST",
        "venue": "Sawai Mansingh Stadium, Jaipur",
        "stadium_image": "https://example.com/Sawai_Mansingh_Stadium.jpg"
      },
    {
        match_number: 45_7,
        team1: "Kolkata Knight Riders",
        team1_logo: "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150241/IPL_TIME_LOGO/Kolkata_Knight_Riders.avif",
        team2: "Rajasthan Royals",
        team2_logo: "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        date: "4 May 2025",
        time: "3:30 PM IST",
        venue: "Eden Gardens, Kolkata",
        stadium_image: "https://indiaongo.in/wp-content/uploads/2022/09/ekana-stadium-seating-map-lucknow.jpg"
      },
      {
        "match_number": 46,
        "team1": "Punjab Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743151693/IPL_TIME_LOGO/Punjab_Kings.avif",
        "team2": "Lucknow Super Giants",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "date": "4 May 2025",
        "time": "7:30 PM IST",
        "venue": "Punjab Cricket Association IS Bindra Stadium, Mohali",
        "stadium_image": "https://indiaongo.in/wp-content/uploads/2022/09/ekana-stadium-seating-map-lucknow.jpg"
      },
      {
        "match_number": 47,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Delhi Capitals",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "date": "5 May 2025",
        "time": "7:30 PM IST",
        "venue": "Rajiv Gandhi International Stadium, Hyderabad",
        "stadium_image": "https://ultimatecricketguru.com/wp-content/uploads/2023/09/m-chinnaswamy-stadium-bangalore-seating-plan.webp"
      },
      {
        "match_number": 48,
        "team1": "Sunrisers Hyderabad",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "6 May 2025",
        "time": "7:30 PM IST",
        "venue": "Wankhede Stadium, Mumbai",
        "stadium_image": "https://ipltickets.in/wp-content/uploads/2024/02/kolkata-eden-gardens-stadium-stands-pavilions-seat-chart.jpg"
      },
      {
        "match_number": 49,
        "team1": "Chennai Super Kings",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "7 May 2025",
        "time": "7:30 PM IST",
        "venue": "MA Chidambaram Stadium, Chennai",
        "stadium_image": "https://t20slam.com/wp-content/uploads/2020/03/Wankhede-stadium-map-with-seat-numbers.jpg"
      },
      {
        "match_number": 50,
        "team1": "Rajasthan Royals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150354/IPL_TIME_LOGO/Rajasthan_Royals.avif",
        "team2": "Sunrisers Hyderabad",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "date": "8 May 2025",
        "time": "7:30 PM IST",
        "venue": "Sawai Mansingh Stadium, Jaipur",
        "stadium_image": "https://example.com/Sawai_Mansingh_Stadium.jpg"
      },
      {
        "match_number": 51,
        "team1": "Delhi Capitals",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Delhi_Capitals.avif",
        "team2": "Gujarat Titans",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "date": "11 May 2025",
        "time": "7:30 PM IST",
        "venue": "Arun Jaitley Stadium, Delhi",
        "stadium_image": "https://example.com/Arun_Jaitley_Stadium.jpg"
      },
      {
        "match_number": 52,
        "team1": "Gujarat Titans",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Gujarat_Titans.avif",
        "team2": "Chennai Super Kings",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Chennai_Super_Kings.avif",
        "date": "18 May 2025",
        "time": "3:30 PM IST",
        "venue": "Narendra Modi Stadium, Ahmedabad",
        "stadium_image": "https://example.com/Narendra_Modi_Stadium.jpg"
      },
      {
        "match_number": 53,
        "team1": "Lucknow Super Giants",
        "team1_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Lucknow_Super_Giants.avif",
        "team2": "Sunrisers Hyderabad",
        "team2_logo": "https://res.cloudinary.com/dvnpk9ikw/image/upload/v1743150377/IPL_TIME_LOGO/Sunrisers_Hyderabad.avif",
        "date": "18 May 2025",
        "time": "7:30 PM IST",
        "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
        "stadium_image": "https://example.com/Ekana_Stadium.jpg"
      }
  ];
  useEffect(() => {
    setData(matches);
  }, []);

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
