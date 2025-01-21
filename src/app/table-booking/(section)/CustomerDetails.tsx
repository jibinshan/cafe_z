import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { FC } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import type { TableFormValues } from './Table-Validation'
import type { UseMutationResult } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import { format } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CustomerDetailsProps {
    form: UseFormReturn<TableFormValues, undefined>;
    bookTableMutation: UseMutationResult<AxiosResponse, Error, TableFormValues>;
    setpage: (page: number) => void;
}

const CustomerDetails: FC<CustomerDetailsProps> = ({ form, bookTableMutation, setpage }) => {
    return (
        <div className='w-full flex flex-col gap-5 items-end'>
            {/* <div className='w-full flex items-start justify-start'>
                <div onClick={() => setpage(0)} className='w-fit flex gap-2 justify-center items-center'>
                    <ArrowLeft />
                    <p>go to back</p>
                </div>
            </div> */}
            <div className='w-full bg-primary/30 py-6 px-12 flex flex-col gap-3' >
                <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-semibold text-foreground'>Date & Time</p>
                        <p className='font-light text-foreground'>{form.watch('date') ? format(form.watch('date'), 'EEE MMM dd yyyy') : "No date selected"},{' '}{form.watch('time') ? form.watch('time') : "No time selected"}</p>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-semibold text-foreground'>No of Guests</p>
                        <p className='font-light text-foreground'>{form.watch('guests') ? `${form.watch('guests')} Guests` : 'no number of guests selected'}</p>
                    </div>
                    <div className='w-full flex items-center md:justify-center'>
                        <p className='border-b-[1px] border-b-[black] w-fit cursor-pointer text-foreground' onClick={() => setpage(0)}>Change Selection</p>
                    </div>
                </div>
            </div>
            <p className='w-full text-2xl font-semibold text-foreground'>Complete your request</p>
            <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-foreground'>Your Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="h-12 border-muted bg-transparent text-foreground"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-foreground'>Your Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    className="h-12 border-muted bg-transparent text-foreground"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-foreground'>Phone Number</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="tel"
                                    className="h-12 border-muted bg-transparent text-foreground"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="place"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-foreground'>Place</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="h-12 border-muted bg-transparent text-foreground">
                                        <SelectValue placeholder="Select Booking Place" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-[300px] text-foreground">

                                    <SelectItem value='Terrace'>
                                        Terrace
                                    </SelectItem>
                                    <SelectItem value='Restaurent'>
                                        Restaurent
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <FormField
                control={form.control}
                name="request"
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel className='text-foreground'>Special Request</FormLabel>
                        <FormControl>
                            <Textarea
                                {...field}
                                className="min-h-[100px] border-muted bg-transparent text-foreground"
                                placeholder="Enter any special requests or dietary requirements..."
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className='w-full flex justify-center'>
                <Button
                    type="submit"
                    className="w-fit py-6 px-6 bg-black text-foreground hover:bg-black/50 md:float-right md:w-fit"
                    disabled={bookTableMutation.isPending}
                >
                    {bookTableMutation.isPending ? "Booking..." : "Book A Table"}
                </Button>
            </div>
        </div >
    )
}

export default CustomerDetails