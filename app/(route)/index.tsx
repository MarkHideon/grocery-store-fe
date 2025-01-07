import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';

type Product = {
    id: number;
    name: string;
    price: number;
    weight: string;
    image: any; // Adjust based on your asset loading method
};

type Offer = {
    id: number;
    name: string;
    image: any; // Adjust based on your asset loading method
};

const MainPage: React.FC = () => {
    const categories: string[] = ['Fruits', 'Vegetables', 'Breads', 'Others'];
    const products: Product[] = [
        {
            id: 1,
            name: 'Onion',
            price: 15,
            weight: '2 Kgs',
            image: require('../../assets/images/onion.png'),
        },
        {
            id: 2,
            name: 'Tomato',
            price: 25,
            weight: '1 Kg',
            image: require('../../assets/images/tomato.png'),
        },
        {
            id: 3,
            name: 'Potato',
            price: 35,
            weight: '3 Kgs',
            image: require('../../assets/images/potato.png'),
        },
        {
            id: 4,
            name: 'Lemon',
            price: 35,
            weight: '2 Kgs',
            image: require('../../assets/images/lemon.png'),
        },
    ];
    const offers: Offer[] = [
        {
            id: 1,
            name: 'Bread just $99',
            image: require('../../assets/images/bread.png'),
        },
        {
            id: 2,
            name: '2kg Onion',
            image: require('../../assets/images/onion.png'),
        },
        {
            id: 3,
            name: 'Lemon just $2',
            image: require('../../assets/images/lemon.png'),
        },
        {
            id: 4,
            name: 'Lemon just $2',
            image: require('../../assets/images/lemon.png'),
        },
        {
            id: 5,
            name: 'Lemon just $2',
            image: require('../../assets/images/lemon.png'),
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.subHeaderText}>
                        Find and order your fresh fruits & vegetables
                    </Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search fresh fruits & vegetables..."
                    />
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Product List */}
                <Text style={styles.productListHeader}>Products</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
                    {products.map((product) => (
                        <View key={product.id} style={styles.productCard}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price}</Text>
                            <Text style={styles.productWeight}>📦 {product.weight}</Text>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.seeAllButton}>
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>

                {/* Today's Offers */}
                <Text style={styles.offersHeader}>Today's Offers</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.offers}>
                    {offers.map((offer) => (
                        <View key={offer.id} style={styles.offerCard}>
                            <Image source={offer.image} style={styles.offerImage} />
                            <Text style={styles.offerText}>{offer.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>

            {/* Footer */}
            {/* <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        paddingVertical: 50,
        paddingHorizontal: 15,
        backgroundColor: '#4CAF50',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subHeaderText: {
        fontSize: 16,
        color: '#fff',
    },
    searchBar: {
        marginVertical: 20,
        paddingHorizontal: 25,
    },
    searchInput: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 15,
        borderColor: '#DDD',
        borderWidth: 1,
    },
    categories: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    categoryButton: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#E5F5E5',
        borderRadius: 20,
    },
    categoryText: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    productList: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    productListHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    productCard: {
        width: 120,
        backgroundColor: '#E5F5E5',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    productName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    productWeight: {
        fontSize: 12,
        color: '#7D7D7D',
    },
    seeAllButton: {
        alignSelf: 'center',
        padding: 10,
        borderColor: '#4CAF50',
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
    },
    seeAllText: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    offersHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    offers: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    offerCard: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    offerImage: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    offerText: {
        fontSize: 12,
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#99CC66',
        padding: 10,
        paddingVertical: 30,
    },
    footerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MainPage;
