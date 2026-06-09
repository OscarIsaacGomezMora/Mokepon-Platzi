
a = float(input("Ingresa un número: "))
b = float(input("Ingresa un número: "))
print("1. Suma. \n")
print("2. Resta. \n")
print("3. Multiplicación. \n")
print("4. División. \n")
operación = int(input("Selecciona una operación: "))
match operación:
    case 1:
        suma = a + b
        print("La suma es : ", suma)
    case 2:
        resta = a - b
        print("La resta es : ", resta)
    case 3:
        mult = a * b
        print("La multiplicación es : ", mult)
    case 4:
        div = a / b
        print("La división es : ", div)
    case _:
        print ("La operación no existe")

