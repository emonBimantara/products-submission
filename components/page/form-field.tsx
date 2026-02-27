import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormFieldProps {
    label: string
    name: string
    id: string
    placeholder?: string
    required: boolean
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    error: string
    helperText?: string
    textarea?: boolean
}

export default function FormField(
    {
        label,
        name,
        id,
        placeholder,
        required,
        onChange,
        error,
        helperText,
        textarea
    }: FormFieldProps
) {
    return (
        <div>
            <div className="space-y-2">
                <Label htmlFor={id}>{label}</Label>
                {textarea ? (
                    <Textarea
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        onChange={
                            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
                        }
                    />
                ) : (
                    <Input
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        onChange={
                            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
                        }
                    />
                )}


                {helperText && (<p className="text-sm text-muted-foreground">{helperText}</p>)}
                {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
        </div>
    )
}
