let rawData = [
  {d: "Sun Jun 17 22:00:01 UTC 2018", s: "78 Mbps"},
  {d: "Sun Jun 17 23:00:01 UTC 2018", s: "79 Mbps"},
  {d: "Mon Jun 18 00:00:13 UTC 2018", s: "93 Mbps"},
  {d: "Mon Jun 18 01:00:13 UTC 2018", s: "93 Mbps"},
  {d: "Mon Jun 18 02:00:19 UTC 2018", s: "69 Mbps"},
  {d: "Mon Jun 18 03:00:13 UTC 2018", s: "61 Mbps"},
  {d: "Mon Jun 18 04:00:17 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 05:00:20 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 18 06:00:25 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 18 07:00:20 UTC 2018", s: "66 Mbps"},
  {d: "Mon Jun 18 08:00:30 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 09:00:24 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 18 10:00:12 UTC 2018", s: "81 Mbps"},
  {d: "Mon Jun 18 11:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jun 18 12:00:13 UTC 2018", s: "91 Mbps"},
  {d: "Mon Jun 18 13:00:36 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 18 14:00:14 UTC 2018", s: "89 Mbps"},
  {d: "Mon Jun 18 15:00:38 UTC 2018", s: "75 Mbps"},
  {d: "Mon Jun 18 16:00:13 UTC 2018", s: "94 Mbps"},
  {d: "Mon Jun 18 17:00:12 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 18 18:00:35 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 19:00:25 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 18 20:00:14 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jun 18 21:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 18 22:00:36 UTC 2018", s: "82 Mbps"},
  {d: "Mon Jun 18 23:00:20 UTC 2018", s: "74 Mbps"},
  {d: "Tue Jun 19 00:00:22 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 01:00:19 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 02:00:21 UTC 2018", s: "70 Mbps"},
  {d: "Tue Jun 19 03:00:15 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 19 04:00:14 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 19 05:00:21 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 19 06:00:29 UTC 2018", s: "55 Mbps"},
  {d: "Tue Jun 19 07:00:20 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jun 19 08:00:20 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 09:00:28 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 10:00:13 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jun 19 11:00:37 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 12:00:24 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 13:00:35 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 19 14:00:17 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jun 19 15:00:20 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 16:00:41 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jun 19 17:00:19 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 18:00:19 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 19:00:18 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 20:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Tue Jun 19 21:00:12 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 22:00:23 UTC 2018", s: "66 Mbps"},
  {d: "Tue Jun 19 23:00:25 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 00:00:19 UTC 2018", s: "91 Mbps"},
  {d: "Wed Jun 20 01:00:30 UTC 2018", s: "29 Mbps"},
  {d: "Wed Jun 20 02:00:15 UTC 2018", s: "57 Mbps"},
  {d: "Wed Jun 20 03:00:30 UTC 2018", s: "63 Mbps"},
  {d: "Wed Jun 20 04:00:27 UTC 2018", s: "79 Mbps"},
  {d: "Wed Jun 20 05:00:31 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 06:00:21 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jun 20 07:00:28 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jun 20 08:00:26 UTC 2018", s: "85 Mbps"},
  {d: "Wed Jun 20 09:00:24 UTC 2018", s: "83 Mbps"},
  {d: "Wed Jun 20 10:00:23 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jun 20 11:00:36 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 12:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jun 20 13:00:12 UTC 2018", s: "91 Mbps"},
  {d: "Wed Jun 20 14:00:13 UTC 2018", s: "90 Mbps"},
  {d: "Wed Jun 20 15:00:22 UTC 2018", s: "74 Mbps"},
  {d: "Wed Jun 20 16:00:19 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 20 17:00:26 UTC 2018", s: "64 Mbps"},
  {d: "Wed Jun 20 18:00:12 UTC 2018", s: "95 Mbps"},
  {d: "Wed Jun 20 19:00:35 UTC 2018", s: "73 Mbps"},
  {d: "Wed Jun 20 20:00:14 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 20 21:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Wed Jun 20 22:00:12 UTC 2018", s: "83 Mbps"},
  {d: "Wed Jun 20 23:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Thu Jun 21 00:00:13 UTC 2018", s: "85 Mbps"},
  {d: "Thu Jun 21 01:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 02:00:15 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 03:00:21 UTC 2018", s: "35 Mbps"},
  {d: "Thu Jun 21 04:00:19 UTC 2018", s: "76 Mbps"},
  {d: "Thu Jun 21 05:00:27 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 21 06:00:35 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 21 07:00:13 UTC 2018", s: "94 Mbps"},
  {d: "Thu Jun 21 08:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Thu Jun 21 09:01:00 UTC 2018", s: "45 Mbps"},
  {d: "Thu Jun 21 10:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Thu Jun 21 11:00:24 UTC 2018", s: "75 Mbps"},
  {d: "Thu Jun 21 12:00:38 UTC 2018", s: "76 Mbps"},
  {d: "Thu Jun 21 13:00:23 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 14:00:36 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 21 15:00:36 UTC 2018", s: "62 Mbps"},
  {d: "Thu Jun 21 16:00:19 UTC 2018", s: "84 Mbps"},
  {d: "Thu Jun 21 17:00:22 UTC 2018", s: "86 Mbps"},
  {d: "Thu Jun 21 18:00:31 UTC 2018", s: "70 Mbps"},
  {d: "Thu Jun 21 19:00:19 UTC 2018", s: "81 Mbps"},
  {d: "Thu Jun 21 20:00:15 UTC 2018", s: "31 Mbps"},
  {d: "Thu Jun 21 21:00:15 UTC 2018", s: "69 Mbps"},
  {d: "Thu Jun 21 22:00:26 UTC 2018", s: "82 Mbps"},
  {d: "Thu Jun 21 23:00:38 UTC 2018", s: "62 Mbps"},
  {d: "Fri Jun 22 00:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Fri Jun 22 01:00:19 UTC 2018", s: "67 Mbps"},
  {d: "Fri Jun 22 02:00:26 UTC 2018", s: "58 Mbps"},
  {d: "Fri Jun 22 03:00:19 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 04:00:28 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 05:00:22 UTC 2018", s: "53 Mbps"},
  {d: "Fri Jun 22 06:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Fri Jun 22 07:00:40 UTC 2018", s: "53 Mbps"},
  {d: "Fri Jun 22 08:00:14 UTC 2018", s: "93 Mbps"},
  {d: "Fri Jun 22 09:00:13 UTC 2018", s: "86 Mbps"},
  {d: "Fri Jun 22 10:00:35 UTC 2018", s: "75 Mbps"},
  {d: "Fri Jun 22 11:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 22 12:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 22 13:00:13 UTC 2018", s: "92 Mbps"},
  {d: "Fri Jun 22 14:00:14 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 22 15:00:37 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 16:00:36 UTC 2018", s: "76 Mbps"},
  {d: "Fri Jun 22 17:00:29 UTC 2018", s: "71 Mbps"},
  {d: "Fri Jun 22 18:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 22 19:00:37 UTC 2018", s: "65 Mbps"},
  {d: "Fri Jun 22 20:00:12 UTC 2018", s: "87 Mbps"},
  {d: "Fri Jun 22 21:00:21 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 22 22:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Fri Jun 22 23:00:17 UTC 2018", s: "91 Mbps"},
  {d: "Sat Jun 23 00:00:20 UTC 2018", s: "71 Mbps"},
  {d: "Sat Jun 23 01:00:18 UTC 2018", s: "89 Mbps"},
  {d: "Sat Jun 23 02:00:27 UTC 2018", s: "79 Mbps"},
  {d: "Sat Jun 23 03:00:35 UTC 2018", s: "58 Mbps"},
  {d: "Sat Jun 23 04:00:18 UTC 2018", s: "55 Mbps"},
  {d: "Sat Jun 23 05:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 23 06:00:14 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 23 07:00:18 UTC 2018", s: "90 Mbps"},
  {d: "Sat Jun 23 08:00:24 UTC 2018", s: "82 Mbps"},
  {d: "Sat Jun 23 09:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 23 10:00:37 UTC 2018", s: "73 Mbps"},
  {d: "Sat Jun 23 12:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Sat Jun 23 13:00:36 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 23 14:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 15:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 16:00:33 UTC 2018", s: ""},
  {d: "Sat Jun 23 17:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 18:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 19:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 20:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 21:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 22:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 23:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 00:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 01:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 02:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 03:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 04:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 05:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 06:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 07:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 08:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 09:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 10:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 11:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 12:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 13:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 14:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 15:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 16:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 17:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 18:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 19:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 20:00:34 UTC 2018", s: ""},
  /* Missing data: Chromium filling up /tmp */
  {d: "Sun Jun 24 21:00:21 UTC 2018", s: "76 Mbps"},
  {d: "Sun Jun 24 22:00:19 UTC 2018", s: "87 Mbps"},
  {d: "Sun Jun 24 23:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Mon Jun 25 00:00:21 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 25 01:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Mon Jun 25 02:00:19 UTC 2018", s: "76 Mbps"},
  {d: "Mon Jun 25 03:00:19 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 25 04:00:14 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 25 05:00:20 UTC 2018", s: "67 Mbps"},
  {d: "Mon Jun 25 06:00:33 UTC 2018", s: "65 Mbps"},
  {d: "Mon Jun 25 07:00:18 UTC 2018", s: "67 Mbps"},
  {d: "Mon Jun 25 08:00:37 UTC 2018", s: "56 Mbps"},
  {d: "Mon Jun 25 09:00:43 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jun 25 10:00:17 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 25 11:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 25 12:00:47 UTC 2018", s: "86 Mbps"},
  {d: "Mon Jun 25 13:00:24 UTC 2018", s: "84 Mbps"},
  {d: "Mon Jun 25 14:00:13 UTC 2018", s: "95 Mbps"},
  {d: "Mon Jun 25 15:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Mon Jun 25 16:00:13 UTC 2018", s: "82 Mbps"},
  {d: "Mon Jun 25 17:00:21 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 25 18:00:16 UTC 2018", s: "84 Mbps"},
  {d: "Mon Jun 25 19:00:43 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jun 25 20:00:19 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 25 21:00:36 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 25 22:00:24 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 25 23:00:20 UTC 2018", s: "80 Mbps"},
  {d: "Tue Jun 26 00:00:18 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 01:00:18 UTC 2018", s: "89 Mbps"},
  {d: "Tue Jun 26 02:00:19 UTC 2018", s: "89 Mbps"},
  {d: "Tue Jun 26 03:00:18 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 26 04:00:13 UTC 2018", s: "40 Mbps"},
  {d: "Tue Jun 26 05:00:36 UTC 2018", s: "58 Mbps"},
  {d: "Tue Jun 26 06:00:19 UTC 2018", s: "85 Mbps"},
  {d: "Tue Jun 26 07:00:21 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jun 26 08:00:37 UTC 2018", s: "70 Mbps"},
  {d: "Tue Jun 26 09:00:22 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jun 26 10:00:18 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 11:00:43 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 26 12:00:42 UTC 2018", s: "63 Mbps"},
  {d: "Tue Jun 26 13:00:18 UTC 2018", s: "91 Mbps"},
  {d: "Tue Jun 26 14:00:37 UTC 2018", s: "62 Mbps"},
  {d: "Tue Jun 26 15:00:20 UTC 2018", s: "95 Mbps"},
  {d: "Tue Jun 26 16:00:14 UTC 2018", s: "80 Mbps"},
  {d: "Tue Jun 26 17:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jun 26 18:00:17 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 19:00:15 UTC 2018", s: "88 Mbps"},
  {d: "Tue Jun 26 20:00:36 UTC 2018", s: "75 Mbps"},
  {d: "Tue Jun 26 21:00:21 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 26 22:00:28 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jun 26 23:00:16 UTC 2018", s: "73 Mbps"},
  {d: "Wed Jun 27 00:00:36 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 01:00:19 UTC 2018", s: "85 Mbps"},
  {d: "Wed Jun 27 02:00:42 UTC 2018", s: "60 Mbps"},
  {d: "Wed Jun 27 03:00:43 UTC 2018", s: "71 Mbps"},
  {d: "Wed Jun 27 04:00:29 UTC 2018", s: "50 Mbps"},
  {d: "Wed Jun 27 05:00:19 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 06:00:19 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 07:00:40 UTC 2018", s: "77 Mbps"},
  {d: "Wed Jun 27 08:00:14 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 09:00:19 UTC 2018", s: "79 Mbps"},
  {d: "Wed Jun 27 10:00:35 UTC 2018", s: "69 Mbps"},
  {d: "Wed Jun 27 11:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 12:00:17 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 13:00:17 UTC 2018", s: "93 Mbps"},
  {d: "Wed Jun 27 14:00:14 UTC 2018", s: "90 Mbps"},
  {d: "Wed Jun 27 15:00:32 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 16:00:18 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 27 17:00:20 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jun 27 18:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Wed Jun 27 19:00:39 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jun 27 20:00:23 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 21:00:36 UTC 2018", s: "67 Mbps"},
  {d: "Wed Jun 27 22:00:33 UTC 2018", s: "66 Mbps"},
  {d: "Wed Jun 27 23:00:17 UTC 2018", s: "60 Mbps"},
  {d: "Thu Jun 28 00:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Thu Jun 28 01:00:39 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 02:00:20 UTC 2018", s: "51 Mbps"},
  {d: "Thu Jun 28 03:00:28 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 04:00:21 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 05:00:37 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 06:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jun 28 07:00:22 UTC 2018", s: "85 Mbps"},
  {d: "Thu Jun 28 08:00:36 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 09:00:19 UTC 2018", s: "97 Mbps"},
  {d: "Thu Jun 28 10:00:14 UTC 2018", s: "91 Mbps"},
  {d: "Thu Jun 28 11:00:21 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 28 12:00:38 UTC 2018", s: "67 Mbps"},
  {d: "Thu Jun 28 13:00:17 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jun 28 14:00:24 UTC 2018", s: "80 Mbps"},
  {d: "Thu Jun 28 15:00:18 UTC 2018", s: "83 Mbps"},
  {d: "Thu Jun 28 16:00:21 UTC 2018", s: "82 Mbps"},
  {d: "Thu Jun 28 17:00:17 UTC 2018", s: "90 Mbps"},
  {d: "Thu Jun 28 18:00:20 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 28 19:00:40 UTC 2018", s: "68 Mbps"},
  {d: "Thu Jun 28 20:00:19 UTC 2018", s: "86 Mbps"},
  {d: "Thu Jun 28 21:00:36 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 22:00:17 UTC 2018", s: "92 Mbps"},
  {d: "Thu Jun 28 23:00:34 UTC 2018", s: "68 Mbps"},
  {d: "Fri Jun 29 00:00:35 UTC 2018", s: "62 Mbps"},
  {d: "Fri Jun 29 01:00:22 UTC 2018", s: "66 Mbps"},
  {d: "Fri Jun 29 02:00:34 UTC 2018", s: "54 Mbps"},
  {d: "Fri Jun 29 03:00:14 UTC 2018", s: "69 Mbps"},
  {d: "Fri Jun 29 04:00:17 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jun 29 05:00:34 UTC 2018", s: "74 Mbps"},
  {d: "Fri Jun 29 06:00:33 UTC 2018", s: "77 Mbps"},
  {d: "Fri Jun 29 07:00:22 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 29 08:00:22 UTC 2018", s: "69 Mbps"},
  {d: "Fri Jun 29 09:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 29 10:00:18 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 29 11:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jun 29 12:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 29 13:00:20 UTC 2018", s: "90 Mbps"},
  {d: "Fri Jun 29 14:00:21 UTC 2018", s: "90 Mbps"},
  {d: "Fri Jun 29 15:00:17 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 29 16:00:18 UTC 2018", s: "54 Mbps"},
  {d: "Fri Jun 29 17:00:34 UTC 2018", s: ""},
  {d: "Fri Jun 29 18:00:34 UTC 2018", s: ""},
  {d: "Fri Jun 29 19:00:17 UTC 2018", s: "40 Mbps"},
  {d: "Fri Jun 29 20:00:30 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 29 21:00:19 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 29 22:00:17 UTC 2018", s: "95 Mbps"},
  {d: "Fri Jun 29 23:00:16 UTC 2018", s: "65 Mbps"},
  {d: "Sat Jun 30 00:00:19 UTC 2018", s: "74 Mbps"},
  {d: "Sat Jun 30 01:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Sat Jun 30 02:00:13 UTC 2018", s: "37 Mbps"},
  {d: "Sat Jun 30 03:00:39 UTC 2018", s: "79 Mbps"},
  {d: "Sat Jun 30 04:00:14 UTC 2018", s: "49 Mbps"},
  {d: "Sat Jun 30 05:00:15 UTC 2018", s: "68 Mbps"},
  {d: "Sat Jun 30 06:00:16 UTC 2018", s: "89 Mbps"},
  {d: "Sat Jun 30 07:00:33 UTC 2018", s: "64 Mbps"},
  {d: "Sat Jun 30 08:00:37 UTC 2018", s: "64 Mbps"},
  /* SED TARGET */
];
