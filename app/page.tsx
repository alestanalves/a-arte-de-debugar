"use client"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const { setTheme } = useTheme()

  // Inicializando o estado dos checkboxes
  const [checkedState, setCheckedState] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
    checkbox15: false,
    checkbox16: false,
    checkbox17: false,
    checkbox18: false
  });

  // Função para resetar os checkboxes
  const resetCheckboxes = () => {
    setCheckedState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false
    });
  };

  return (
    <main className="flex flex-col items-center justify-center p-24">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold">A arte de debugar</h1>
          <p className="mb-2">Use isso nos dias mais normais de um dev. Esse é seu guia de bolso!</p>
          <div className="mb-2">
            <Button onClick={resetCheckboxes}>Resetar</Button>
          </div>
          <h2 className="text-2xl font-bold mb-2">se houver um erro</h2>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox1" checked={checkedState.checkbox1} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox1: Boolean(value) }))} />
            <Label htmlFor="checkbox1">você leu a mensagem? (~30s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox2" checked={checkedState.checkbox2} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox2: Boolean(value) }))} />
            <Label htmlFor="checkbox2">você perguntou para seus amigos? (~2m)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox3" checked={checkedState.checkbox3} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox3: Boolean(value) }))} />
            <Label htmlFor="checkbox3">você procurou na base de código por uma implementação? (~1m)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox4" checked={checkedState.checkbox4} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox4: Boolean(value) }))} />
            <Label htmlFor="checkbox4">você acessou a documentação? (~15m)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox5" checked={checkedState.checkbox5} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox5: Boolean(value) }))} />
            <Label htmlFor="checkbox5">você pesquisou o erro? ChatGPT, Google, StackOverFlow (~15m)</Label>
          </div>
          <h2 className="text-2xl font-bold mb-2">as coisas pararam de funcionar "do nada"</h2>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox6" checked={checkedState.checkbox6} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox6: Boolean(value) }))} />
            <Label htmlFor="checkbox6">você salvou o arquivo? (~5s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox7" checked={checkedState.checkbox7} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox7: Boolean(value) }))} />
            <Label htmlFor="checkbox7">está retornando algo? (~1m)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox8" checked={checkedState.checkbox8} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox8: Boolean(value) }))} />
            <Label htmlFor="checkbox8">você está na URL correta? (~5s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox9" checked={checkedState.checkbox9} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox9: Boolean(value) }))} />
            <Label htmlFor="checkbox9">você está conectado à VPN? (~10s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox10" checked={checkedState.checkbox10} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox10: Boolean(value) }))} />
            <Label htmlFor="checkbox10">o arquivo .env foi configurado? (~10s)</Label>
          </div>
          <h2 className="text-2xl font-bold mb-2">desligue e ligue o roteador para voltar</h2>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox11" checked={checkedState.checkbox11} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox11: Boolean(value) }))} />
            <Label htmlFor="checkbox11">você reiniciou o servidor local? (~30s)</Label>
          </div>
          <div className="flex items-center space-x-1 mb-1">
            <Checkbox id="checkbox12" checked={checkedState.checkbox12} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox12: Boolean(value) }))} />
            <Label htmlFor="checkbox12">você reiniciou o Servidor do FastAPI? (~10s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox13" checked={checkedState.checkbox13} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox13: Boolean(value) }))} />
            <Label htmlFor="checkbox13">você reinstalou os requirements? (~1m)</Label>
          </div>
          <h2 className="text-2xl font-bold mb-2">erros comuns</h2>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox14" checked={checkedState.checkbox14} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox14: Boolean(value) }))} />
            <Label htmlFor="checkbox14">você limpou o cache? (~10s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox15" checked={checkedState.checkbox15} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox15: Boolean(value) }))} />
            <Label htmlFor="checkbox15">você está sincronizado com a branch correta? (~1m)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox16" checked={checkedState.checkbox16} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox16: Boolean(value) }))} />
            <Label htmlFor="checkbox16">seus imports estão corretos? (~30s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-1">
            <Checkbox id="checkbox17" checked={checkedState.checkbox17} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox17: Boolean(value) }))} />
            <Label htmlFor="checkbox17">já tentou com sudo? (~10s)</Label>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="checkbox18" checked={checkedState.checkbox18} onCheckedChange={(value) => setCheckedState(prev => ({ ...prev, checkbox18: Boolean(value) }))} />
            <Label htmlFor="checkbox18">está conectado na internet? (~10s)</Label>
          </div>
          <div>
            <Button>Estou pronto para pedir ajuda</Button>
          </div>
        </div>
    </main>
  )
}
