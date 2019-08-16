<?
header('Content-Type: application/json');

// Получатели, через запятую
$mailTo = 'ramilzaidullin@mail.ru';
//$mailCopy = 'copy@test.test';

// Отправитель (Email)
//$mailFrom = 'noreply@unverified.beget.ru';

// Отправитель (Подпись)
$mailFromName = 'Отправитель';

// Тема письма
$subject = 'Заявка с сайта';

$arResult = [
	'success' => false
];

$name = filter_var($_POST["name"]);
$phone = filter_var($_POST["phone"]);
//$url = filter_var($_POST["url"]);

if ($_POST['subject']) {

	$subject = filter_var($_POST['subject']);
}

if (
	$name
	&& $phone
) {

	$body = $subject . "\r\n\r\n";
	$body .= "Дата заявки: " . date('d.m.Y H:i:s') . "\r\n\r\n";
	$body .= "Имя: " . $name . "\r\n";
	$body .= "Телефон: " . $phone . "\r\n";
	//$body .= "Url-страницы: " . $url . "\r\n\r\n";

	$body .= "----------------------------------\n";
	$body .= "Письмо сгенерировано автоматически";

	$headers  = "Content-type: text/plain; charset=windows-1251 \r\n";

	if ($mailCopy) {

		$headers .= "CC: $mailCopy\r\n";
	}

	if ($mailFrom && $mailFromName) {

		$headers .= "From: " . iconv('utf-8', 'cp1251', $mailFromName) . " <$mailFrom>\r\n";
	}

	$headers .= "X-Priority: 1 (Highest)\r\n";

	mail($mailTo, iconv('utf-8', 'cp1251', $subject), iconv('utf-8', 'cp1251', $body), $headers);

	$arResult['success'] = true;

	//$arResult['body'] = $body;
}

echo json_encode($arResult);
