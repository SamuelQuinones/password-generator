import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

/** Settings version for compatibility */
const SETTINGS_VERSION = 1
const SETINGS_KEY_BASE = "pw-gen-settings"
const SETTINGS_STORAGE_FULLKEY = `${SETINGS_KEY_BASE}-v${SETTINGS_VERSION}`

export const generatorSchema = z.object({
  passwordLength: z.coerce
    .number<number>()
    .min(6, "Number cannot be lower than six")
    .max(90, "I am not sure why you'd want a password this long..."),
  includeUppercase: z.coerce.boolean<boolean>("Value must be a boolean"),
  includeLowercase: z.coerce.boolean<boolean>("Value must be a boolean"),
  includeNumbers: z.coerce.boolean<boolean>("Value must be a boolean"),
  includeSymbols: z.coerce.boolean<boolean>("Value must be a boolean"),
  advancedSettings: z.object({
    maxLength: z.coerce
      .number<number>()
      .min(24, "Lower base length for shorter passwords")
      .max(90, "I am not sure why you'd want a password this long..."),
    includeSimilarCharacters: z.coerce.boolean<boolean>(
      "Value must be a boolean"
    ),
    includeAmbiguousSymbols: z.coerce.boolean<boolean>(
      "Value must be a boolean"
    ),
    useDuplicateCharacters: z.coerce.boolean<boolean>(
      "Value must be a boolean"
    ),
    saveForNextTime: z.coerce.boolean<boolean>("Value must be a boolean"),
  }),
})

export type GeneratorSchemaType = z.infer<typeof generatorSchema>

const defaults: GeneratorSchemaType = {
  passwordLength: 6,
  includeUppercase: false,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
  advancedSettings: {
    maxLength: 24,
    includeSimilarCharacters: false,
    includeAmbiguousSymbols: true,
    saveForNextTime: false,
    useDuplicateCharacters: true,
  },
}

export function saveGeneratorSettings(data: GeneratorSchemaType) {
  const newValues = JSON.parse(JSON.stringify(data, null, 2))
  newValues.advancedSettings.saveForNextTime = false
  const s = JSON.stringify(newValues)
  localStorage.setItem(SETTINGS_STORAGE_FULLKEY, s)
}

export function getLocalstorageValue() {
  return localStorage.getItem(SETTINGS_STORAGE_FULLKEY)
}

export function loadGeneratorSettings() {
  const localStorageData = getLocalstorageValue()
  if (!localStorageData) return defaults
  const settings = z.safeParse(generatorSchema, JSON.parse(localStorageData))
  if (settings.error) {
    console.error(z.prettifyError(settings.error))
    localStorage.removeItem(SETTINGS_STORAGE_FULLKEY)
    return defaults
  }
  return settings.data
}

export function clearSettings() {
  localStorage.removeItem(SETTINGS_STORAGE_FULLKEY)
}

export function useGenerator(defaultValues: GeneratorSchemaType) {
  return useForm({
    resolver: zodResolver(generatorSchema),
    defaultValues,
  })
}
