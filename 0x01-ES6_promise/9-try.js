export default function guardrail(mathFunction) {
	var array = [];
	try {
		array.push(mathFunction());
	} catch(error) {
		array.push(`Error: ${error.message}`);
	} finally {
		array.push('Guardrail was processed');
	}
	return array;
}
