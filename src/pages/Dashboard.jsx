import React from 'react'

export default function Dashboard () {

    let config = [
        {
            title: 'Repo Hierarchy',
            type: 'Tree',
            height: '600px',
            width: '90%',
            left: '10%',
            endpoint: '/api/data/repo_hierarchy'
        },
        {
            title: 'Total Open Source vs Enterprise Repos',
            type: 'Line',
            height: '400px',
            width: '45%',
            xAxis: 'date',
            yAxes: ['os_repo_count', 'ep_repo_count'],
            yNames: ['Total Open Source Repos', 'Total Enterprise Repos'],
            endpoint: '/api/data/amount_of_repos'
        },
        {
            title: 'EP Managed VS Total Devices',
            type: 'PercentageBar',
            height: '400px',
            width: '45%',
            endpoint: '/api/data/device_percentage'
        }
    ]

    return (
    <section className="dashboard">
        {
            config && config.map((conf, idx) => {
                const component = require(`../components/${conf.type}.jsx`).default
                return React.createElement(component, { config: conf, key: idx })
            })
        }
    </section>
    )
}