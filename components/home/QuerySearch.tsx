"use client";

import { Field, FieldError } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import IconSearch from "../ui/icon-search";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "../ui/label";

function QuerySearch() {
  const [error, setError] = useState<null | string>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const text = searchParams.get("text");

  function handleSubmitForm(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("word") as string;

    const params = new URLSearchParams(searchParams);
    if (text.trim()) {
      params.set("text", text);
    } else {
      params.delete("text");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  function handleOnChangeInput(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const text = e.target.value;
    if (text.trim()) {
      setError(null);
    } else {
      setError("Whoops, can't be empty...");
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Field>
        <InputGroup>
          <Label htmlFor="word" className="sr-only">
            Search for any word
          </Label>
          <InputGroupInput
            onChange={handleOnChangeInput}
            aria-invalid={error ? "true" : "false"}
            className="text-preset-5-mobile md:text-preset-3 font-bold"
            defaultValue={text || ""}
            key={text}
            type="text"
            id="word"
            name="word"
            placeholder="Search for any word..."
          />
          <InputGroupAddon align="inline-end">
            <button type="submit" aria-label="search">
              <IconSearch />
            </button>
          </InputGroupAddon>
        </InputGroup>
        {error && <FieldError>{error}</FieldError>}
      </Field>
    </form>
  );
}

export default QuerySearch;
