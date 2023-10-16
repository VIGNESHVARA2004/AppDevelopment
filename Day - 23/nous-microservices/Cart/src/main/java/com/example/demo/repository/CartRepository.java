package com.example.demo.repository;

import com.example.demo.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByUserid(int userid);

    Optional<Cart> findByUseridAndProductid(int userid, int productid);

    @Modifying
    @Query("DELETE FROM Cart c WHERE c.productid = :productid")
    void deleteByProductid(@Param("productid") int productid);
}
