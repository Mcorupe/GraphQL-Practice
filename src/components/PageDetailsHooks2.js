import { useStaticQuery, graphql } from "gatsby"

export const usePageDetails2 = () => {
  const { starWars } = useStaticQuery(
    graphql`
      query starwarsQuery2 {
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
  return starWars.results[1]
}
