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
  /* SED TARGET */
];
