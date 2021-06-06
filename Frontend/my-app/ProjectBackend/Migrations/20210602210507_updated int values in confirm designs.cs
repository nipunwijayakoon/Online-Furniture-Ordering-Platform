using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class updatedintvaluesinconfirmdesigns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Advance_Fee",
                table: "ConfirmedNewDesigns");

            migrationBuilder.DropColumn(
                name: "Total_Amount",
                table: "ConfirmedNewDesigns");

            migrationBuilder.DropColumn(
                name: "Transportation_Amount",
                table: "ConfirmedNewDesigns");

            migrationBuilder.AlterColumn<string>(
                name: "Seller_Contact",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Charge_for_km",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "No_of_kms",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Charge_for_km",
                table: "ConfirmedNewDesigns");

            migrationBuilder.DropColumn(
                name: "No_of_kms",
                table: "ConfirmedNewDesigns");

            migrationBuilder.AlterColumn<string>(
                name: "Seller_Contact",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Advance_Fee",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Total_Amount",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Transportation_Amount",
                table: "ConfirmedNewDesigns",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");
        }
    }
}
