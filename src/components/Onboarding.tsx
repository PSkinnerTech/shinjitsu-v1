'use client'

import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Card } from './ui/card'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function Onboarding() {
  const form = useForm()

  return (
    <Card className="glassmorphic border p-4">
      <h2>Instructions</h2>
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="fetch-api-key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>1. Fetch your API key</FormLabel>
                <FormControl>
                  <Input placeholder="Your API key" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="api-key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>2. Paste your API key</FormLabel>
                <FormControl>
                  <Input placeholder="Your API key" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  )
}
