import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    packages: defineCollection({
      type: 'data',
      source: 'packages.json',
      schema: z.array(
                z.object({
                    heading: z.string(),
                    subHeading: z.string(),
                    price: z.number(),
                    pricePlus: z.boolean(),
                    image: z.string(),
                    list: z.array(z.string()),
                    description: z.string(),
                })
        ),
    }),

  }
})
