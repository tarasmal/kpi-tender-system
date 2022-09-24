import React from 'react';
import Flex from "../atoms/Flex";
import Header from "../molecules/Header";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const MainPage = () => {
    return (
        <Flex flexDirection={'column'} height={'100vh'} alignItems={'center'} justifyContent={'space-between'}>
            <Header />
            <Flex
                width={'100%'}
                height={'80vh'}
                justifyContent={'center'}
            >
                <Flex
                    flexDirection={'column'}
                    rowGap={'30px'}
                >
                    <Flex flexDirection={'column'}>
                        <Text>
                            Find a tender
                        </Text>
                        <Input
                            width={'300px'}
                            height={'30px'}
                            paddingLeft={'10px'}
                            placeholder={'Find a tender '}
                        />
                    </Flex>
                    <div
                        style={{
                            height: '100%',
                            width: '100vh',
                            border: '1px solid',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px'
                        }}
                    >
                        В наш час веб сфера стрімко розвивається, та сервіси, які нещодавно були доступні нам лише на вулицях наших міст, зʼявляються в Інтернеті. Навіть такі важливі процеси, як державні закупівлі переносяться з паперу в цифровий формат. Щоб це було можливим, створюються системи для проведення тендерів – обовʼязкових процедур для державних закупівель, проведених публічно. Прозорість цієї схеми мінімізує ризики корупції в нашій країні. В наш час існує популярна платформа Prozorro (https://prozorro.gov.ua/) для проведення таких закупівель. Буде розроблено альтернативну до вищезгаданої платформу, яка працюватиме як веб застосунок
                        Отже, метою роботи є створення власної системи проведення тендерів, яка б могла задовольнити потреби власних клієнтів.
                        Система повинна давати користувачам такі основні можливості:
                        Реєструватись на сайті та обирати роль – customer(замовник) чи provider(виконавець);
                        Створювати тендери та пропозиції по тендерах; • Обирати переможця по тендерній пропозиції;
                        Зупиняти та видаляти тендери;
                        Видаляти пропозиції по тендерах.
                        Цей перелік можливостей забезпечує мінімальну працездатність веб застосунку відповідно до вимог.
                    </div>
                </Flex>


            </Flex>

            <Flex justifySelf={'flex-end'}>
                There fill be a footer
            </Flex>
        </Flex>
    );
};

export default MainPage;
