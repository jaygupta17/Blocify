interface ProfileCardLightProps{
    name:string;
    email:string;
}

export function ProfileCardLight({name,email}:ProfileCardLightProps) {
    return(

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <div className='h-9 aspect-square rounded-full bg-white/20'>
                </div>
                {/* <Image
                  alt="Neil image"
                  height="32"
                  src="/logo.png"
                  width="32"
                  className="rounded-full"
                /> */}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{name}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{email}</p>
              </div>
              <div className="inline-flex tracking-wide border-b items-center text-base font-regular text-gray-900 dark:text-white">view</div>
            </div>
    )
}