import React, {useState} from "react";
import {
	View,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import {styles} from "./styles";
import {Card, Input} from "../../components";
import colors from "../../constants/colors";

const StartGame = () => {
	const [number, setNumber] = useState("");
	const [selectedNumber, setSelectedNumber] = useState(null);
	const [confirmed, setConfirmed] = useState(false);

	const onHandleChange = (value) => {
		setNumber(value.replace(/[^0-9]/g, ""));
	};

	const onHandleReset = () => {
		setNumber("");
		setConfirmed(false);
	};

	const onHandleConfirm = () => {
		const choseNumber = parseInt(number, 10);
		if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
			/* Alert.alert("Numero invalido", "Debe ser un numero del 1 al 99", [
				{text: Okay, style: "destructive", onPress: () => {}},
			]); */
		} else {
			setConfirmed(true);
			setSelectedNumber(choseNumber);
			setNumber("");
		}
	};

	const onHandleStartGame = () => {};

	const confirmedOutput = () =>
		confirmed ? (
			<Card style={styles.coinfirmedContainer}>
				<Text style={styles.coinfirmedTitle}>Your selected</Text>
				<Text style={styles.coinfirmedNumber}>{selectedNumber}</Text>
				<Button
					title="Start Game"
					onPress={onHandleStartGame}
					color={colors.primary}
				/>
			</Card>
		) : null;

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Let's start!</Text>
				<Card style={styles.inputContainer}>
					<Text style={styles.label}>Select a number</Text>
					<Input
						style={styles.input}
						placeholder="0"
						maxLength={2}
						keyboardType="number-pad"
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={onHandleChange}
						value={number}
					/>
					<View style={styles.buttonContainer}>
						<Button
							title="Reset"
							onPress={onHandleReset}
							color={colors.secondary}
						/>
						<Button
							title="Confirm"
							onPress={onHandleConfirm}
							color={colors.primary}
						/>
					</View>
				</Card>
				{confirmedOutput()}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
