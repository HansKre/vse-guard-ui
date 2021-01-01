import { gql } from 'apollo-boost';

const Queries = {
  GET_WEATHER: gql`
    query {
      getCityById(id: "2825297", config: { units: metric }) {
        name
        weather {
          summary {title description}
          temperature {actual feelsLike min max}
          wind {speed deg}
          timestamp
        }
      }
    }  
  `,

  GET_WEATHER_FOR: gql`
    query ($name: String!) {
      getCityByName(name: $name, config: { units: metric }) {
        name
        weather {
          summary {title description}
          temperature {actual feelsLike min max}
          wind {speed deg}
          timestamp
        }
      }
    }  
  `,

  GET_SECTIONS: gql`
    {
      getSections {
        title
        dataCards {
          title
          icon
          environments {
            name
            status
          }
          chart {
            style
            data {
              innerPie {
                name
                value
              }
              outerPie {
                name
                value
              }
              bars {
                name
                uv
                pv
                amt
              }
              areas {
                name
                uv
                pv
                amt
              }
            }
          }
        }
      }
    }
  `,

  GET_APPS: gql`
    query {
      apps {
        desc
        class
        layer
        hasnoswagger
        environments {
          env
          server
          host
          path
          checks {
            action
            link
            href
            authHref
            description
            state
            path
            no
            actionResult {
              message
            }
          }
        }
      }
    }  
  `,

  GET_ENV: gql`
    query ($app: String! $env: String!) {
      env(app: $app, env: $env) {
        env
        server
        host
        path
        health {
          action
          link
          href
          authHref
          description
          state
          path
          no
          actionResult {
            message
          }
        }
      }
    }
  `
}
export default Queries;