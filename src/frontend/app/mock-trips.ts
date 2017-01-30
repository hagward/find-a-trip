export var TRIPS: any = {
  "TripList": {
    "noNamespaceSchemaLocation": "http://api.vasttrafik.se/v1/hafasRestTrip.xsd",
    "servertime": "22:48",
    "serverdate": "2016-08-02",
    "Trip": [
      {
        "Leg": {
          "name": "Buss 60",
          "sname": "60",
          "type": "BUS",
          "id": "9015014506000226",
          "direction": "Redbergsplatsen",
          "fgColor": "#00b6f1",
          "bgColor": "#ffffff",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950012",
            "routeIdx": "10",
            "time": "22:52",
            "date": "2016-08-02",
            "track": "L",
            "rtTime": "22:52",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460006",
            "routeIdx": "21",
            "time": "23:07",
            "date": "2016-08-02",
            "track": "F",
            "rtTime": "23:07",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=511995%2F195905%2F357168%2F7920%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950012%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      },
      {
        "Leg": {
          "name": "Spårvagn 4",
          "sname": "4",
          "type": "TRAM",
          "id": "9015014500404161",
          "direction": "Angered via Redbergsplatsen",
          "fgColor": "#14823c",
          "bgColor": "#ffffff",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950001",
            "routeIdx": "15",
            "time": "22:54",
            "date": "2016-08-02",
            "track": "A",
            "rtTime": "22:55",
            "rtDate": "2016-08-02",
            "Notes": {
              "Note": [
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "1",
                  "$": "Linje 4, 7, 9 och 11, kör efter Centralstationen via Olskrokstorget, Redbergsplatsen och Ejdergatan till Gamlestadstorget och omvänt på grund av ett spårarbete. Detta beräknas pågå den 25 juli klockan 04:00 till 7 augusti klockan 04:00. Räkna med längre restid på sträckan. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                },
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "2",
                  "$": "Linje 4, 8 och 9, ingen spårvagnstrafik sträckan Gamlestadstorget - Angered och omvänt på grund av ett spårarbete. Buss 4E och 8E ersätter på sträckan. Detta beräknas pågå från 25 juli klockan 04:00 till 7 augusti klockan 04:00. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                }
              ]
            }
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460004",
            "routeIdx": "17",
            "time": "23:00",
            "date": "2016-08-02",
            "track": "D",
            "rtTime": "23:01",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=713976%2F266114%2F969334%2F246677%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950001%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      },
      {
        "Leg": {
          "name": "Spårvagn 1",
          "sname": "1",
          "type": "TRAM",
          "id": "9015014500104177",
          "direction": "Östra Sjukhuset",
          "fgColor": "#ffffff",
          "bgColor": "#00394d",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950002",
            "routeIdx": "21",
            "time": "22:54",
            "date": "2016-08-02",
            "track": "B",
            "rtTime": "22:55",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460001",
            "routeIdx": "25",
            "time": "23:01",
            "date": "2016-08-02",
            "track": "A",
            "rtTime": "23:03",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=613764%2F217521%2F621838%2F106332%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950002%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      },
      {
        "Leg": {
          "name": "Spårvagn 11",
          "sname": "11",
          "type": "TRAM",
          "id": "9015014501104179",
          "direction": "Bergsjön via Redbergsplatsen",
          "fgColor": "#000000",
          "bgColor": "#ffffff",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950001",
            "routeIdx": "23",
            "time": "22:56",
            "date": "2016-08-02",
            "track": "A",
            "rtTime": "22:59",
            "rtDate": "2016-08-02",
            "Notes": {
              "Note": [
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "1",
                  "$": "Linje 4, 7, 9 och 11, kör efter Centralstationen via Olskrokstorget, Redbergsplatsen och Ejdergatan till Gamlestadstorget och omvänt på grund av ett spårarbete. Detta beräknas pågå den 25 juli klockan 04:00 till 7 augusti klockan 04:00. Räkna med längre restid på sträckan. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                },
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "2",
                  "$": "Linje 4, 8 och 9, ingen spårvagnstrafik sträckan Gamlestadstorget - Angered och omvänt på grund av ett spårarbete. Buss 4E och 8E ersätter på sträckan. Detta beräknas pågå från 25 juli klockan 04:00 till 7 augusti klockan 04:00. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                }
              ]
            }
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460004",
            "routeIdx": "25",
            "time": "23:02",
            "date": "2016-08-02",
            "track": "D",
            "rtTime": "23:05",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=708525%2F264884%2F612126%2F69890%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950001%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      },
      {
        "Leg": [
          {
            "name": "Gå",
            "type": "WALK",
            "Origin": {
              "name": "Göteborg C, Göteborg",
              "type": "ST",
              "id": "9022014008000023",
              "time": "22:57",
              "date": "2016-08-02",
              "$": "\n"
            },
            "Destination": {
              "name": "Nordstan, Göteborg",
              "type": "ST",
              "id": "9022014004945001",
              "time": "23:02",
              "date": "2016-08-02",
              "track": "A",
              "$": "\n"
            }
          },
          {
            "name": "Spårvagn 6",
            "sname": "6",
            "type": "TRAM",
            "id": "9015014500604183",
            "direction": "Kortedala via Annedal",
            "fgColor": "#fa8719",
            "bgColor": "#00394d",
            "stroke": "Solid",
            "accessibility": "wheelChair",
            "Origin": {
              "name": "Nordstan, Göteborg",
              "type": "ST",
              "id": "9022014004945001",
              "routeIdx": "15",
              "time": "23:02",
              "date": "2016-08-02",
              "track": "A",
              "rtTime": "23:03",
              "rtDate": "2016-08-02",
              "$": "\n"
            },
            "Destination": {
              "name": "Redbergsplatsen, Göteborg",
              "type": "ST",
              "id": "9022014005460004",
              "routeIdx": "36",
              "time": "23:34",
              "date": "2016-08-02",
              "track": "D",
              "rtTime": "23:34",
              "rtDate": "2016-08-02",
              "$": "\n"
            },
            "JourneyDetailRef": {
              "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=965742%2F335230%2F168914%2F237457%2F80%3Fdate%3D2016-08-02%26station_evaId%3D4945001%26station_type%3Ddep%26format%3Djson%26"
            }
          }
        ]
      },
      {
        "Leg": {
          "name": "Spårvagn 7",
          "sname": "7",
          "type": "TRAM",
          "id": "9015014500704169",
          "direction": "Bergsjön via Redbergsplatsen",
          "fgColor": "#7d4313",
          "bgColor": "#ffffff",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950001",
            "routeIdx": "20",
            "time": "23:03",
            "date": "2016-08-02",
            "track": "A",
            "rtTime": "23:04",
            "rtDate": "2016-08-02",
            "Notes": {
              "Note": [
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "1",
                  "$": "Linje 4, 7, 9 och 11, kör efter Centralstationen via Olskrokstorget, Redbergsplatsen och Ejdergatan till Gamlestadstorget och omvänt på grund av ett spårarbete. Detta beräknas pågå den 25 juli klockan 04:00 till 7 augusti klockan 04:00. Räkna med längre restid på sträckan. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                },
                {
                  "key": "disruption-message",
                  "severity": "low",
                  "priority": "2",
                  "$": "Linje 4, 8 och 9, ingen spårvagnstrafik sträckan Gamlestadstorget - Angered och omvänt på grund av ett spårarbete. Buss 4E och 8E ersätter på sträckan. Detta beräknas pågå från 25 juli klockan 04:00 till 7 augusti klockan 04:00. För mer information se Trafikläge på vasttrafik.se eller i appen Reseplaneraren."
                }
              ]
            }
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460004",
            "routeIdx": "22",
            "time": "23:09",
            "date": "2016-08-02",
            "track": "D",
            "rtTime": "23:10",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=234513%2F106543%2F340820%2F92241%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950001%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      },
      {
        "Leg": {
          "name": "Spårvagn 3",
          "sname": "3",
          "type": "TRAM",
          "id": "9015014500304167",
          "direction": "Kålltorp",
          "fgColor": "#004b85",
          "bgColor": "#ffffff",
          "stroke": "Solid",
          "accessibility": "wheelChair",
          "Origin": {
            "name": "Centralstationen, Göteborg",
            "type": "ST",
            "id": "9022014001950002",
            "routeIdx": "20",
            "time": "23:03",
            "date": "2016-08-02",
            "track": "B",
            "rtTime": "23:05",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "Destination": {
            "name": "Redbergsplatsen, Göteborg",
            "type": "ST",
            "id": "9022014005460001",
            "routeIdx": "24",
            "time": "23:10",
            "date": "2016-08-02",
            "track": "A",
            "rtTime": "23:13",
            "rtDate": "2016-08-02",
            "$": "\n"
          },
          "JourneyDetailRef": {
            "ref": "https://api.vasttrafik.se/bin/rest.exe/v2/journeyDetail?ref=388344%2F142515%2F544000%2F142553%2F80%3Fdate%3D2016-08-02%26station_evaId%3D1950002%26station_type%3Ddep%26format%3Djson%26"
          }
        }
      }
    ]
  }
};
