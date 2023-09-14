'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'

/**
 * Example B: Clientside mutation/write
 */
export async function createIdentity(displayName: string, description: string) {
  const body = {
    displayName: displayName,
    description: description,
  }
  const resp = await fetch('/api/identity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const error = await resp.json()
    throw new Error(error.message, error.code)
  }

  const { data: createdIdentity } = await resp.json()
  return createdIdentity
}
/**
 * Example B
 */
const identityFormSchema = z.object({
  displayName: z
    .string()
    .min(2, {
      message: 'Display name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Display name must not be longer than 30 characters.',
    }),
  description: z
    .string({
      required_error: 'Please enter a description.',
    })
    .min(2, {
      message: 'Description must be at least 2 characters.',
    })
    .max(30, {
      message: 'Description must not be longer than 30 characters.',
    }),
})

type IdentityFormValues = z.infer<typeof identityFormSchema>

const defaultValues: Partial<IdentityFormValues> = {
  description: '',
  displayName: '',
}

export default function IdentityForm() {
  const [loading, setLoading] = React.useState<boolean>(false)

  const form = useForm<IdentityFormValues>({
    resolver: zodResolver(identityFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit() {
    const { displayName, description } = form.getValues()
    console.log('Submitted form values', form.getValues())
    setLoading(true)
    try {
      let createdIdentity = await createIdentity(displayName, description)
      console.log('Identity created successfully', createdIdentity)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  return (
    <div className="w-1/2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-4 space-y-8">
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Vanilla" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. A chaotic-neutral ice cream flavor."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-28 "
            variant="secondary"
            size="sm"
            type="submit"
            disabled={loading}
            isLoading={loading}
          >
            Create
          </Button>
        </form>
      </Form>
    </div>
  )
}
