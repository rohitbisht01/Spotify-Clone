// use-sound.d.ts
declare module 'use-sound' {
    interface UseSoundOptions {
        volume?: number;
        onplay?: () => void;
        onend?: () => void;
        onpause?: () => void;
        format?: string[]; // Replace 'string[]' with the actual type for 'format' if necessary
        // Add more properties as needed
    }

    type UseSoundReturnType = [
        () => void, // play function
        {
            pause: () => void;
            sound: any; // Replace 'any' with the actual type for 'sound' if necessary
            // Add more properties as needed
        }
    ];

    function useSound(url: string, options: UseSoundOptions): UseSoundReturnType;

    export = useSound;
}
