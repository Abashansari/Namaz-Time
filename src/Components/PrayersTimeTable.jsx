import React, { useEffect, useState } from 'react'
import { PrayerTimes, CalculationMethod, Coordinates, Prayer } from 'adhan'

export default function PrayersTimeTable() {
  const [time, setTime] = useState(null)
  const [coords, setCoords] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      }
      )
    } else {
      setError("Geolocation is not supported by this browser")
    }

  }, [])

  useEffect(() => {

    try {
      if (!coords) return;

      const date = new Date()

      const coordinates = new Coordinates(coords.lat, coords.lon)

      const calculationMethod = CalculationMethod.MuslimWorldLeague()
      calculationMethod.madhab = 'hanafi'

      const prayerTimes = new PrayerTimes(coordinates, date, calculationMethod)

      setTime({
        fajr: prayerTimes.fajr.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sunrise: prayerTimes.sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        dhuhr: prayerTimes.dhuhr.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        asr: prayerTimes.asr.toLocaleString([], { hour: '2-digit', minute: '2-digit' }),
        maghrib: prayerTimes.maghrib.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isha: prayerTimes.isha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      })
    } catch (error) {
      console.log("error", error.message)
    }
  }, [coords])

  if (error) return <p>{error}</p>
  if (!coords) return <p>Locating you......</p>
  if (!time) return <p>Calculating prayer Time...</p>


  return (
    <div className='container'>
      <div className="table table-success table-striped">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Prayer Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fajar</td>
              <td>{time.fajr}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{time.sunrise}</td>
            </tr>
            <tr>
              <td>Zohar</td>
              <td>{time.dhuhr}</td>
            </tr>
            <tr>
              <td>Asar</td>
              <td>{time.asr}</td>
            </tr>
            <tr>
              <td>Maghrig</td>
              <td>{time.maghrib}</td>
            </tr>
            <tr>
              <td>Esha</td>
              <td>{time.isha}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}