export const parse = (consumption: any) => {
    return {
        date: !!consumption['Fecha  '] ? consumption['Fecha  '].trim() : '',
        hour: !!consumption[' Hora  '] ? consumption[' Hora  '].trim() : '',
        consumption: !!consumption[' Consumo (Wh) '] ? consumption[' Consumo (Wh) '].trim() : '',
        price: !!consumption[' Precio (€/kWh) '] ? consumption[' Precio (€/kWh) '].trim() : '',
        pricePerHour: !!consumption[' Coste por hora (€)'] ? consumption[' Coste por hora (€)'].trim() : '',
    }
}