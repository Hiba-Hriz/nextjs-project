import { cva, type VariantProps } from "class-variance-authority"
export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-white text-black",
          destructive: "bg-white text-black", 
          outline: "bg-white text-black border border-input", 
        
          secondary: "bg-white text-black", 
          ghost: "bg-white text-black", 
          link: "bg-white text-black underline-offset-4", 
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
        
        
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )