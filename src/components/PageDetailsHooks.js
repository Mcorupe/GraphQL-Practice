import { useStaticQuery, graphql } from "gatsby"

export const usePageDetails = () => {
  const { starWars } = useStaticQuery(
    graphql`
      query starwarsQuery {
        starWars {
          results {
            name
            climate
            population
            terrain
            surface_water
            rotation_period
          }
        }
      }
    `
  )
  return starWars.results[0]
}
