import { Controller } from "react-hook-form"
import {
  loadGeneratorSettings,
  saveGeneratorSettings,
  useGenerator,
  type GeneratorSchemaType,
} from "@/lib/rhf"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field"
import type { BooleanKeys } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { generateRandomPW } from "@/lib/generate-pw"
import { usePasswordContext } from "./components/pw-provider"
import { Input } from "./components/ui/input"

type BooleanFieldNames =
  | BooleanKeys<GeneratorSchemaType>
  | `advancedSettings.${BooleanKeys<GeneratorSchemaType["advancedSettings"]>}`
type FieldItem = {
  id: string
  name: BooleanFieldNames
  description?: string
  label: string
}
const basicToggles: FieldItem[] = [
  {
    id: "pw-generator-uppercase",
    label: "Include Uppercase",
    name: "includeUppercase",
  },
  {
    id: "pw-generator-lowercase",
    label: "Include Lowercase",
    name: "includeLowercase",
  },
  {
    id: "pw-generator-numbers",
    label: "Include Numbers",
    name: "includeNumbers",
  },
  {
    id: "pw-generator-symbols",
    label: "Include Symbols",
    name: "includeSymbols",
  },
]

const advancedToggles: FieldItem[] = [
  {
    id: "pw-generator-adv-similar",
    label: "Include Similar Characters",
    name: "advancedSettings.includeSimilarCharacters",
    description: "( i, l, 1, L, o, 0, O )",
  },
  {
    id: "pw-generator-adv-ambiguous",
    label: "Include Ambiguous Symbols",
    name: "advancedSettings.includeAmbiguousSymbols",
    description: "( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )",
  },
  {
    id: "pw-generator-dupe",
    label: "Use Duplicate Characters",
    name: "advancedSettings.useDuplicateCharacters",
    description: "Your password contain unique characters only",
  },
  {
    id: "pw-generator-save",
    label: "Save settings",
    name: "advancedSettings.saveForNextTime",
    description: "Remember these settings for future use",
  },
]

const classList =
  "col-start-1 row-start-1 " +
  "data-starting-style:opacity-0 data-ending-style:opacity-0 " +
  "motion-safe:data-starting-style:data-[activation-direction=left]:translate-x-[-50%] " +
  "motion-safe:data-starting-style:data-[activation-direction=right]:translate-x-[50%] " +
  "motion-safe:data-ending-style:data-[activation-direction=left]:translate-x-[50%] " +
  "motion-safe:data-ending-style:data-[activation-direction=right]:translate-x-[-50%]"

const defaults = loadGeneratorSettings()
export default function GeneratorForm() {
  const { setPassword, setSaved } = usePasswordContext()
  const { control, watch, register, formState, handleSubmit, setValue } =
    useGenerator(defaults)
  const [pwLen, pwMaxLen, incSym] = watch([
    "passwordLength",
    "advancedSettings.maxLength",
    "includeSymbols",
  ])

  const onSubmit = (data: GeneratorSchemaType) => {
    const randomPw = generateRandomPW(data)
    if (data.advancedSettings.saveForNextTime) {
      saveGeneratorSettings(data)
      setValue("advancedSettings.saveForNextTime", false)
      setSaved(true)
    }
    setPassword(randomPw)
  }

  return (
    <form id="password-form" onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="basic">
        <div className="relative -m-1 grid min-h-100 grid-cols-1 overflow-hidden p-1">
          <TabsContent
            value="basic"
            className={`text-base transition-[opacity,translate] duration-300 ${classList}`}
          >
            <h2>Length {pwLen}</h2>
            <Card className="mb-2 text-base [--card-spacing:--spacing(2)]">
              <CardContent>
                <input
                  type="range"
                  step={1}
                  className="w-full accent-primary"
                  min={6}
                  max={pwMaxLen}
                  {...register("passwordLength")}
                />
                <div className="flex justify-between">
                  <div>6</div>
                  <div>{pwMaxLen}</div>
                </div>
                {formState.errors?.passwordLength && (
                  <p className="text-destructive">
                    {formState.errors?.passwordLength.message}
                  </p>
                )}
              </CardContent>
            </Card>
            <h2>Settings</h2>
            <section className="space-y-2">
              {basicToggles.map((f) => (
                <Card
                  key={f.id}
                  className="text-base [--card-spacing:--spacing(4)]"
                >
                  <CardContent className="[--card-spacing:--spacing(2)]">
                    <Controller
                      name={f.name}
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldLabel htmlFor={f.id}>{f.label}</FieldLabel>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                          <Switch
                            id={f.id}
                            name={field.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      )}
                    />
                  </CardContent>
                </Card>
              ))}
            </section>
          </TabsContent>
          <TabsContent
            value="advanced"
            className={`text-base transition-[opacity,translate] duration-300 ${classList}`}
          >
            <h2>Advanced Settings</h2>
            <section className="space-y-2">
              <Card className="text-base [--card-spacing:--spacing(2)]">
                <CardContent>
                  <Field
                    orientation="horizontal"
                    data-invalid={
                      !!formState.errors?.advancedSettings?.maxLength
                    }
                  >
                    <FieldContent>
                      <FieldLabel htmlFor="pw-gen-max-len">
                        Max Length
                      </FieldLabel>
                      <FieldDescription>
                        Make your passwords even longer
                      </FieldDescription>
                      {formState.errors?.advancedSettings?.maxLength && (
                        <FieldError
                          errors={[
                            formState.errors?.advancedSettings?.maxLength,
                          ]}
                        />
                      )}
                    </FieldContent>
                    <Input
                      className="w-auto"
                      aria-invalid={
                        !!formState.errors?.advancedSettings?.maxLength
                      }
                      id="pw-gen-max-len"
                      type="number"
                      step={1}
                      min={24}
                      max={90}
                      pattern="[0-9]*"
                      {...register("advancedSettings.maxLength", {
                        valueAsNumber: true,
                      })}
                    />
                  </Field>
                </CardContent>
              </Card>
              {advancedToggles.map((f) => (
                <Card
                  key={f.id}
                  className="text-base [--card-spacing:--spacing(2)]"
                >
                  <CardContent>
                    <Controller
                      name={f.name}
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldLabel htmlFor={f.id}>{f.label}</FieldLabel>
                            <FieldDescription>{f.description}</FieldDescription>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </FieldContent>
                          <Switch
                            id={f.id}
                            name={field.name}
                            checked={field.value}
                            disabled={
                              field.name ===
                                "advancedSettings.includeAmbiguousSymbols" &&
                              !incSym
                            }
                            onCheckedChange={field.onChange}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      )}
                    />
                  </CardContent>
                </Card>
              ))}
            </section>
          </TabsContent>
        </div>
        <TabsList className="w-full">
          <TabsTrigger value="basic">Basic Settings</TabsTrigger>
          <TabsTrigger value="advanced">Advacned Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </form>
  )
}
