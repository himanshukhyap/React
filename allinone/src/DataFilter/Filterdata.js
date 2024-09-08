import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { jsondata } from './jsondata'
let Data = [];
let DataObject = {}
let MonthObject = {}
let sum = 0;
let sumJAK = 0;

export default function Filterdata() {
    const [FilterData, setFilterData] = useState([])
    const [topPercentageData, settopPercentageData] = useState([])
    useEffect(() => {
        for (const key in jsondata) {
            DataObject = {
                Country: jsondata[key].Country,
                Month: []
            }
            for (let index = 0; index < 8; index++) {

                for (const v in jsondata[key].Other) {
                    if (jsondata[key].Other[v].Product !== null) {
                        sum += jsondata[key].Other[v].MonthStatics[index].Value
                    }


                }
                for (const vj in jsondata[key].JAKClass) {
                    if (jsondata[key].JAKClass[vj].Product !== null) {
                        sumJAK += jsondata[key].JAKClass[vj].MonthStatics[index].Value
                    }

                }
                MonthObject = {
                    month: jsondata[key].Other[0].MonthStatics[index].dtFromStr,
                    Total_Value: sum,
                    JAK_Value: sumJAK,
                    percentage: sumJAK * 100 / sum
                }
                DataObject.Month.push(MonthObject)
                sum = 0;
                sumJAK = 0;
            }
            Data.push(DataObject)
        }
        setFilterData(Data)

    }, [])

    const fetchdata = () => {
        let filterpercentagedata = FilterData.map(item => {
            return (
                {
                    Country: item.Country,
                    percentage: item.Month[7].percentage||0
                }
            )
        })
        filterpercentagedata.sort(function (a, b = 0) { return b.percentage - a.percentage });
        filterpercentagedata.length=5;
        settopPercentageData(filterpercentagedata)
    }



    return (
        <div className="container">
            <div className="text-center mt-5">
                <Button onClick={fetchdata}>Show Top Country</Button>
            </div>
            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Country</th>
                        <th scope="col">percentage</th>

                    </tr>
                </thead>
                <tbody>
                    {topPercentageData.map((item) => {

                        return (
                            <tr>
                                <td>{item.Country}</td>
                                <td>{item.percentage.toFixed(2)+ " %"}</td>
                            </tr>

                        )
                    })

                    }

                </tbody>
            </table>

        </div>
    )
}
